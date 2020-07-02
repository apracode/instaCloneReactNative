import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeProfile: async (_, args) => {
      const { id } = args;
      const profile = await prisma.user({ id: id });
      const posts = await prisma.user({ id: id }).posts();
      return { user: profile, posts };
    },
  },
};
