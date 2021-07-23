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