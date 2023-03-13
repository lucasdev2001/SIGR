const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = process.env.port;

mongoose
  .connect(process.env.CONNECTION_STRING)
  .catch((error) => console.log(error));

//middlewares
app.use(cors());
app.use(express.json());

//rotas
const auth = require("./routes/auth");
app.use("/auth", auth);

app.listen(port, () => {
  console.log(`servidor escutando na porta: ${port}`);
});
