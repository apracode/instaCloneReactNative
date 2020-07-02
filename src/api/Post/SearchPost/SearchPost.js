import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchByPost: async (_, args) => {
      const { title } = args;
      return await prisma.posts({
        where: {
          OR: [
            {
              location_starts_with: title,
            },
            { caption_starts_with: title },
          ],
        },
      });
    },
  },
};
