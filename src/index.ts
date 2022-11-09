import connectToDb from "./database/index.js";
import "./loadEnviorments.js";

const { MONGO_URL: url } = process.env;

await connectToDb(url);
