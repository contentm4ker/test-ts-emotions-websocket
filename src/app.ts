import express from "express";
import lusca from "lusca";
import path from "path";

export const baseUrl = process.env.BASE_URL || "";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

const routes = express.Router();
routes.get("/socketest", (_, res) => res.sendFile(path.join(__dirname, "/../src/socketest.html")));

app.use(baseUrl, routes);

export default app;
