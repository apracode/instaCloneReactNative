import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";
import { ROOM_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeRoom: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { id } = args;
      const canSee = await prisma.$exists.direct({
        participants_some: {
          id: user.id,
        },
      });

      if (canSee) {
        const room = await prisma
          .direct({
            id: id,
          })
          .$fragment(ROOM_FRAGMENT);
        return room;
      } else {
        throw Error("You are not participant");
      }
    },
  },
};
