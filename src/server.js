import passport, { authenticate } from "passport";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";
import "./env";

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request }),
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on port ${PORT}...`)
);
