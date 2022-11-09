import "./loadEnviorments.js";
import connectToDb from "./database/index.js";
import startServer from "./server/index.js";

const { PORT: port, MONGO_URL: url } = process.env;

await connectToDb(url);
// eslint-disable-next-line no-implicit-coercion, @typescript-eslint/no-unsafe-call
await startServer(+port);
