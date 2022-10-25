import express from "express";
import bodyParser from "body-parser";
import http from "http";
import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.js";

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 3001;

dotenv.config();

app.use(bodyParser.json());

app.use("/users", users);

server.listen(port, () => console.log("Listening on port 3001"));
