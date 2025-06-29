import { getToken } from "../services/auth.js";
import { authenticateWebSocket } from "../services/getToken.js";
import {
  handleRoomEvent,
  handleUserDisconnect,
} from "./roomHandler.js";
import { handleMessageEvent } from "./messageHandler.js";
import { logger } from "../utils/logger.js";
import { PORT } from "../config.js";

export const setupWebSocketServer = (wss) => {
  wss.on("connection", (socket, request) => {
    const url = request.url;
    if (!url) {
      logger.error("Connection request missing URL");
      socket.close();
      return;
    }

    const token = getToken(url);
    const authenticatedUser = authenticateWebSocket(token);

    if (!authenticatedUser) {
      logger.warn("Unauthorized WebSocket connection attempt");
      socket.close();
      return;
    }

    const userId = authenticatedUser.id;
    logger.info(`User ${userId} connected`);

    // Handle incoming messages
    socket.on("message", (data) => {
      try {
        const message = JSON.parse(data.toString());

        switch (message.type) {
          case "room:join":
          case "room:leave":
            handleRoomEvent(socket, message, userId);
            break;

          case "message:add":
          case "message:delete":
          case "message:edit":
            handleMessageEvent(socket, message, userId);
            break;

          default:
            logger.warn(`Unknown message type received: ${message.type}`);
        }
      } catch (error) {
        logger.error("Invalid message format", error);
      }
    });

    // Handle disconnection
    socket.on("close", () => {
      logger.info(`User ${userId} disconnected`);
      handleUserDisconnect(socket, userId); // uses userId to fully clean up rooms
    });
  });

  wss.on("listening", () => {
    logger.info(`WebSocket server is running on ws://localhost:${PORT}`);
  });
};