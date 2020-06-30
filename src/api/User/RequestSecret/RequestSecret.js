import { prisma } from "../../../../generated/prisma-client";
import { secretGenerator, sendSecterMail } from "../../../utils";

export default {
  Mutation: {
    requestSecret: async (_, args, { request }) => {
      const { email } = args;
      const secret = secretGenerator();
      try {
        await sendSecterMail(email, secret);
        await prisma.updateUser({
          data: { loginSecret: secret },
          where: { email: email },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
