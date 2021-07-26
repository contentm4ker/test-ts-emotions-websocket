import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    logger.debug("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
} else {
    logger.debug("Using .env.example file to supply config environment variables");
    dotenv.config({ path: ".env.example" });
}

export const ENVIRONMENT = process.env.NODE_ENV;

export const REDIS_ADAPTER_ENABLE = process.env.REDIS_ADAPTER_ENABLE === "true";
if (!process.env.REDIS_ADAPTER_ENABLE) {
    logger.error("Missing REDIS_ADAPTER_ENABLE. Set REDIS_ADAPTER_ENABLE environment variable (true or false).");
    process.exit(1);
}

export const REDIS_ADAPTER_HOST = process.env.REDIS_ADAPTER_HOST;
if (REDIS_ADAPTER_ENABLE && !REDIS_ADAPTER_HOST) {
    logger.error("Missing REDIS_ADAPTER_HOST. Set REDIS_ADAPTER_HOST environment variable.");
    process.exit(1);
}

export const REDIS_ADAPTER_PORT = Number(process.env.REDIS_ADAPTER_PORT);
if (REDIS_ADAPTER_ENABLE && !process.env.REDIS_ADAPTER_PORT) {
    logger.error("Missing REDIS_ADAPTER_PORT. Set REDIS_ADAPTER_PORT environment variable.");
    process.exit(1);
}
if (REDIS_ADAPTER_ENABLE && !REDIS_ADAPTER_PORT) {
    logger.error("REDIS_ADAPTER_PORT environment variable must be integer");
    process.exit(1);
}

export const EMOTION_ID_LOWER = Number(process.env.EMOTION_ID_LOWER);
if (!process.env.EMOTION_ID_LOWER) {
    logger.error("Missing EMOTION_ID_LOWER. Set EMOTION_ID_LOWER environment variable.");
    process.exit(1);
}
if (!EMOTION_ID_LOWER) {
    logger.error("EMOTION_ID_LOWER environment variable must be integer");
    process.exit(1);
}
if (EMOTION_ID_LOWER < 1) {
    logger.error("EMOTION_ID_LOWER environment variable must be >= 1");
    process.exit(1);
}

export const EMOTION_ID_UPPER = Number(process.env.EMOTION_ID_UPPER);
if (!process.env.EMOTION_ID_UPPER) {
    logger.error("Missing EMOTION_ID_UPPER. Set EMOTION_ID_UPPER environment variable.");
    process.exit(1);
}
if (!EMOTION_ID_UPPER) {
    logger.error("EMOTION_ID_UPPER environment variable must be integer");
    process.exit(1);
}
if (EMOTION_ID_UPPER > 8) {
    logger.error("EMOTION_ID_UPPER environment variable must be <= 8");
    process.exit(1);
}
