import { verifyToken } from "../../http-backend/utils/jwt.js"
import { logger } from "../utils/logger.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateWebSocket = (token) => {
  try {
    if (!token) {
      logger.error("[authenticateWebSocket] No token provided");
      return null;
    }

    const decoded = verifyToken(token, JWT_SECRET);

    if (!decoded || !decoded.id) {
      logger.error("[authenticateWebSocket] Invalid token");
      return null;
    }

    logger.info(`[authenticateWebSocket] User authenticated`);
    return decoded;
  } 
  catch (error) {
    logger.error("[authenticateWebSocket] JWT verification failed", error);
    return null;
  }
};