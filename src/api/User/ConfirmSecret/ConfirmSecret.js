import { prisma } from "../../../../generated/prisma-client";
import { genereteToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args, { request }) => {
      // console.log("REq", request);
      const { email, secret } = args;
      const user = await prisma.user({ email: email });
      if (user.loginSecret === secret) {
        await prisma.updateUser({
          where: {
            id: user.id,
          },
          data: {
            loginSecret: "",
          },
        });
        const token = genereteToken(user.id);
        return token;
      } else {
        throw Error("Wrong email/password conbination");
      }
    },
  },
};
