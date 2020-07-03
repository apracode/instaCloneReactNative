import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    editProfile: async (_, args, { request }) => {
      isAuthenticated(request);
      const { name, email, firstName, lastName, bio, avatar } = args;
      const { user } = request;
      return prisma.updateUser({
        where: {
          id: user.id,
        },
        data: {
          name: name,
          email: email,
          firstName: firstName,
          lastName: lastName,
          bio: bio,
          avatar: avatar,
        },
      });
    },
  },
};
