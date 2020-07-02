import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      const post = await prisma.post({ id: id });
      const comments = await prisma
        .post({ id: id })
        .comments()
        .$fragment(COMMENT_FRAGMENT);
      const likes = await prisma
        .likesConnection({ where: { post: { id } } })
        .aggregate()
        .count();
      const files = await prisma.post({ id: id }).files();
      const user = await prisma.post({ id: id }).user();

      return { post, comments, likeCount: likes, files, user };
    },
  },
};
