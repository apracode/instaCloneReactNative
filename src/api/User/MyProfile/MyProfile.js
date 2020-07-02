import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    myProfile: async (_, __, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const profile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return { user: profile, posts };
    },
  },
};
