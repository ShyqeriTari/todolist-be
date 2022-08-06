import express from "express";
import cors from "cors";
import { testDB, syncDB } from "./db/index.js";
import {
    badRequestHandler,
    unauthorizedHandler,
    forbiddenHandler,
    notFoundHandler,
    genericErrorHandler,
} from "./errorHandlers.js";
import usersRouter  from "./services/users/index.js";

const server = express()

server.use(express.json())

server.use(cors())

server.use("/user", usersRouter);

const PORT = 3001

server.use(badRequestHandler);
server.use(unauthorizedHandler);
server.use(forbiddenHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

const initialize = async () => {
    try {
        server.listen(PORT, async () => {
            await testDB();
            await syncDB();

            console.log("✅ Server is listening on port " + PORT);
        });

        server.on("error", (error) => {
            console.log("❌ Server is not running due to error : " + error);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

initialize();