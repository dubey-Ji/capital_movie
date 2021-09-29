const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cors = require("cors");
app.enableCors;
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8000", "http://localhost:3000"],
  })
);

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

// Database file
require("./database/config");

// Bring Models from backend
const user = require("./models/useSchema");

app.use(express.json());
// We link the router files
const routes = require("./routes/router");
app.use(routes);

app.listen(port, () => {
  console.log(`Connected to Port ${port}`);
});
