import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    editPost: async (_, args, { request }) => {
      isAuthenticated(request);
      const { id, caption, location } = args;
      const { user } = request;
      const myPost = await prisma.$exists.post({
        id: id,
        user: {
          id: user.id,
        },
      });
      if (myPost) {
        const post = await prisma.updatePost({
          data: { caption, location },
          where: {
            id: id,
          },
        });
        return post;
      } else {
        throw Error("It is not your post!");
      }
    },
  },
};
