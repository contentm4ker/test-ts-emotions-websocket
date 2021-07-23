import _ from "lodash";
import { Server } from "http";
import { Server as SocketServer } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";

import { baseUrl } from "./app";
import logger from "./util/logger";
import {
    EMOTION_ID_LOWER,
    EMOTION_ID_UPPER,
    REDIS_ADAPTER_HOST,
    REDIS_ADAPTER_PORT
} from "./util/secrets";

export default function injectSocket(server: Server): SocketServer {
  const socketIO = new SocketServer(server, {
    path: `${baseUrl}/socket.io`,
    transports: ["websocket"]
  });

  // Adapter for scaling to multiple Socket.IO servers (instead of memory adapter)
  const pubClient = createClient({ host: REDIS_ADAPTER_HOST, port: REDIS_ADAPTER_PORT });
  const subClient = pubClient.duplicate();
  socketIO.adapter(createAdapter(pubClient, subClient));

  socketIO.on("connection", (socket) => {
      socket.on("emotion", (emotionId: number) => {
          if (!_.isNumber(emotionId) || emotionId < EMOTION_ID_LOWER || emotionId > EMOTION_ID_UPPER) {
              const errMsg = `Validation Error. Bad emotion '${emotionId}' (${typeof emotionId}).\
                  Valid emotions are integers from [${EMOTION_ID_LOWER}, ${EMOTION_ID_UPPER}]`;
              logger.error(errMsg);
              socket.emit("exception", { msg: errMsg });
              return;
          }
          socket.broadcast.emit("emotion", emotionId);
      });
  });

  return socketIO;
}
