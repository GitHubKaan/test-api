import express from "express";
import fs from "node:fs";
import http from "node:http";
import https from "node:https";
import { RouterUtil } from "./src/utils/router.util";
import { StatusCodes } from "http-status-codes";
import cors from "cors";

export const app = express();
export let server: http.Server | https.Server;

async function start() {
    if (fs.existsSync("./.env.dev") && fs.existsSync("./.env.prod")) {
        let server: http.Server | https.Server = http.createServer(app); // Using standard HTTP/WS connection (unsecure)
        
        app.set("trust proxy", 1);

        const corsOptions = {
            origin: "*",
            credentials: true,
            methods: "GET, PATCH, PUT, POST, DELETE",
            optionsSuccessStatus: StatusCodes.OK,
            exposedHeaders: ["Authentication", "Authorization"]
        };
        
        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        RouterUtil.routes();
        
        console.log("success, api running...");

        server.listen(4000, () => {});
    } else {
        console.error("One or multiple environment files are missing.");
        process.exit(1);
    }
}

start();
