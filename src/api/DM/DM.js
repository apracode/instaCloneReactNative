import { prisma } from "../../../generated/prisma-client";

export default {
  Direct: {
    participants: ({ id }) => prisma.direct({ id }).participants(),
    messagess: ({ id }) => prisma.direct({ id }).messagess(),
  },
  Message: {
    from: ({ id }) => prisma.message({ id }).from(),
    to: ({ id }) => prisma.message({ id }).to(),
    direct: ({ id }) => prisma.message({ id }).room(),
  },
};
