import { logger } from "../utils/logger.js";
import {
  addUserToRoom,
  isUserInRoom,
  rooms,
  removeUser,
  broadcastToRoom,
} from "../utils/roomManager.js";

export const handleRoomEvent = async (socket,message,userId) => {
  const { type, room } = message;

  switch (type) {
    case "room:join":
      if (!isUserInRoom(socket, room)) {
        addUserToRoom(socket, room);
        logger.info(`User ${userId} joined room ${room}`);
        broadcastToRoom(
          room,
          {
            type: "user:connected",
            message: `User ${userId} joined`,
          },
          socket
        );
      }
      break;

    case "room:leave":
      if (rooms[room] && isUserInRoom(socket, room)) {
        await removeUserFromRoom(socket, room, userId);
      }
      break;
  }
};

// Handle Disconnect
export const handleUserDisconnect = (socket, userId) => {
  for (const room in rooms) {
    if (rooms[room] && isUserInRoom(socket, room)) {
      removeUserFromRoom(socket, room, userId);
    }
  }
};


export const removeUserFromRoom = async (socket,room,userId) => {

  if (!rooms[room] || !isUserInRoom(socket, room)) {
    logger.warn(
      `User ${userId} tried to leave room ${room}, but either room does not exist or user not in room.`
    );
    return;
  }

  try {
    removeUser(socket, room);

    const roomSize = rooms[room]?.size || 0;
    logger.info(
      `User ${userId} left room ${room}. Remaining users: ${roomSize}`
    );
  } 
  catch (err) {
    logger.error(`Error while removing user ${userId} from room ${room}:`, err);
  } 
  finally {
    if (rooms[room]) {
      cleanupRoom(room, socket);
    }
  }
};

// Remove Room if Empty
const cleanupRoom = (room, socket) => {
  const userCount = rooms[room]?.size || 0;

  if (userCount === 0) {
    delete rooms[room];
    logger.info(`Room ${room} deleted (no users left).`);
  } 
  else {
    broadcastToRoom(
      room,
      {
        type: "user:disconnected",
        message: `A user left the room`,
      },
      socket
    );
  }
};