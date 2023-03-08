import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Router } from "./Routes";

const app = express();

app.use(new Router().router);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening To: ${process.env.PORT}`);
});
