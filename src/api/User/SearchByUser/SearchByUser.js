import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchByUser: async (_, args) => {
      const { name } = args;
      return await prisma.users({
        where: {
          OR: [
            {
              name_contains: name,
            },
            { firstName_contains: name },
            { lastName_contains: name },
          ],
        },
      });
    },
  },
};
