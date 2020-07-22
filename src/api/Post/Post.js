import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      const liked = prisma.$exists.like({
        AND: [{ user: { id: user.id } }, { post: { id: id } }],
      });
      console.log(liked);
      return liked;
    },
    likeCount: (parent) =>
      prisma
        .likesConnection({
          where: {
            post: {
              id: parent.id,
            },
          },
        })
        .aggregate()
        .count(),
    files: (parent) => prisma.post({ id: parent.id }).files(),
    comments: (parent) => prisma.post({ id: parent.id }).comments(),
    user: (parent) => prisma.post({ id: parent.id }).user(),
  },
};
