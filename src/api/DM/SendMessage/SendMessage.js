import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";
import { ROOM_FRAGMENT } from "../../../fragments";

export default {
  Mutation: {
    sendMessage: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { roomId, message, to } = args;
      console.log(to);
      let room;
      if (roomId === undefined) {
        if (user.id !== to) {
          room = await prisma
            .createDirect({
              participants: {
                connect: [{ id: to }, { id: user.id }],
              },
            })
            .$fragment(ROOM_FRAGMENT);
        }
      } else {
        room = await prisma.direct({ id: roomId }).$fragment(ROOM_FRAGMENT);
      }
      if (!room) {
        throw Error("Room not found");
      }
      const getTo = room.participants.filter(
        (participant) => participant.id !== user.id
      );
      console.log(getTo[0].id);
      const mess = await prisma.createMessage({
        text: message,
        to: {
          connect: {
            id: roomId ? getTo[0].id : to,
          },
        },
        from: {
          connect: {
            id: user.id,
          },
        },
        direct: {
          connect: {
            id: room.id,
          },
        },
      });
      return mess;
    },
  },
};
