import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    deletePost: async (_, args, { request }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      const myPost = await prisma.$exists.post({
        id: id,
        user: {
          id: user.id,
        },
      });
      if (myPost) {
        await prisma.deletePost({ id: id });
        return true;
      } else {
        return false;
      }
    },
  },
};
