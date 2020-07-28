import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    fullName: (parent) => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    following: ({ id }) => prisma.user({ id }).following(),
    followers: ({ id }) => prisma.user({ id }).followers(),
    amIFollowing: async (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      const exist = await prisma.$exists.user({
        AND: [{ id: user.id }, { following_some: { id: id } }],
      });
      return exist;
    },
    posts: ({ id }) => prisma.user({ id }).posts(),
    itsMe: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return id === user.id;
    },
  },
  Post: {
    isLiked: async (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [{ user: { id: user.id } }, { post: { id: id } }],
      });
    },
  },
};
