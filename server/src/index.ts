import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { redis } from "./redis";
import connectRedis from "connect-redis";
import session from "express-session";
import cors from "cors";
import http from 'http'

// Create a RedisStore instance
const RedisStore = connectRedis(session);

const main = async () => {
  const app = express();

  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  );
  await createConnection({ ...options, name: "default" });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + "/resolvers/*.resolver.ts"],
      validate: true,
    }),
    context: ({ req, res }: any) => ({ req, res }),
  });

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      // Name of the cookie
      name: "qid",
      secret: "kjxgvvuisgghg5fgiw45fge78ygbtr",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      },
    })
  );

  apolloServer.applyMiddleware({ app, cors: false });

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer)

  const port = process.env.PORT || 5000;
  httpServer.listen(port, () => {
    console.log(`🚀 Subscriptions ready at ws://localhost:${port}${apolloServer.subscriptionsPath}`)
    console.log(`🚀 Server started at http://localhost:${port}/graphql`);
  });
};

main();
