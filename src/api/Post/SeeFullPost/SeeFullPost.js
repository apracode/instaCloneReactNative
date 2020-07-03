import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT, FULLPOST_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      const post = await prisma.post({ id: id }).$fragment(FULLPOST_FRAGMENT);

      return post;
    },
  },
};
