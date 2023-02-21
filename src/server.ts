import config from "config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { database, logger } from "./startup/index";
import { resolvers } from "@resolvers/categories";
import { typeDefs } from "@models/categories/schema.graphql";

database();
const port: number = config.get("port");
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port },
    });

    logger.info(`👀 Listening on ${url}`);
})();

// routes(app);
// validation();
// configuration();
// prod(app);

// const server = app.listen(port, () => {
//     logger.info(`👀 Listening on port ${port}`);
// });

// export default server;
