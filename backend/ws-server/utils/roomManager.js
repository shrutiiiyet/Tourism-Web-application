import { WebSocket } from "ws";

//ROOMS = [] where [roomId] : Set<WebSocket>;

export const rooms = {};

// Add user to a room
export const addUserToRoom = (socket, roomId) => {
  if (!rooms[roomId]) rooms[roomId] = new Set();
  rooms[roomId].add(socket);
};

// Remove user from a room
export const removeUser = (socket, roomId) => {
  if (!rooms[roomId]) return;

  rooms[roomId].delete(socket);
};

// Get all users in a room-returns array of sockets
export const getUsersInRoom = (roomId) => {
  return rooms[roomId] ? Array.from(rooms[roomId]) : [];
};

// Check if user is in a room
export const isUserInRoom = (socket, roomId) => {
  return rooms[roomId]?.has(socket) || false;
};

//  Broadcast message to all users in a room
export const broadcastToRoom = (roomId,message,excludeSocket) => {
  if (!rooms[roomId]) return;
  const data = JSON.stringify(message);

  rooms[roomId].forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== excludeSocket) {
      client.send(data);
    }
  });
};