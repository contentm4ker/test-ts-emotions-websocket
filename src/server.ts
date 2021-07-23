import _ from "lodash";
import { Server as SocketServer } from "socket.io";
import errorHandler from "errorhandler";

import app, { baseUrl } from "./app";
import logger from "./util/logger";
import { EMOTION_ID_LOWER, EMOTION_ID_UPPER } from "./util/secrets";


/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}


/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

const socketIO = new SocketServer(server, { path: `${baseUrl}/socket.io`, transports: ["websocket"] });

socketIO.on("connection", (socket) => {

    socket.on("emotion", (emotionId: number) => {
        if (!_.isNumber(emotionId) || emotionId < EMOTION_ID_LOWER || emotionId > EMOTION_ID_UPPER) {
            const errMsg = `Validation Error. Bad emotion '${emotionId}' (${typeof emotionId}). Valid emotions are integers from [1, 8]`;
            logger.error(errMsg);
            socket.emit("exception", { msg: errMsg });
            return;
        }
        socket.broadcast.emit("emotion", emotionId);
    });
});

export default server;
