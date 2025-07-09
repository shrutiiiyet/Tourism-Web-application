import { verifyToken } from "../services/verifyToken.js"
import { logger } from "../utils/logger.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateWebSocket = async(token) => {
  try {
    if (!token) {
      logger.error("[authenticateWebSocket] No token provided");
      return null;
    }

      const decoded = await verifyToken(token, JWT_SECRET);
      

      if (!decoded || !decoded.id) {
        logger.error("[authenticateWebSocket] Invalid token");
        return null;
      }

      logger.info(`[authenticateWebSocket] User ${decoded.id} authenticated`);
      return decoded;
  } 
  catch (error) {
    logger.error("[authenticateWebSocket] JWT verification failed", error);
    return null;
  }
};