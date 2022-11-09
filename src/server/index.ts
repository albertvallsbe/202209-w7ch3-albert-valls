import "../loadEnviorments.js";
import type { Express } from "express";

await startServer = async ( app: Express, port: number)=> 
  new Promise((resolve, reject) => {
    const server = app.listen(port, ()=> {
      resolve(server);
    });
    server.on("error" , (error)=> {
      reject(error);
    })
  });

  export default startServer;
