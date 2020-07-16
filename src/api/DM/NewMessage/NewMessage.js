import { prisma } from "../../../../generated/prisma-client";

export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args) => {
        const { chatId } = args;
        return prisma.$subscribe
          .message({
            AND: [
              { mutation_in: "CREATED" },
              {
                node: {
                  direct: { id: chatId },
                },
              },
            ],
          })
          .node();
      },
      resolve: (payload, args, context) => {
        console.log(args, context, payload);
        return payload;
      },
    },
  },
};
