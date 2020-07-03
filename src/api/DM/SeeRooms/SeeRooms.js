import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";
import { ROOM_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeRooms: async (_, __, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      return prisma
        .directs({
          where: {
            participants_some: {
              id: user.id,
            },
          },
        })
        .$fragment(ROOM_FRAGMENT);
    },
  },
};
