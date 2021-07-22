import express from "express";
import lusca from "lusca";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

export default app;
