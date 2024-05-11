const express = require("express");
require("dotenv").config();
const app = express();
const dbConfig = require("./config/dbConfig");
const userRouter = require("./routes/userRouter");
console.log(dbConfig);

app.use(express.json()); //application level middleware which parses request body

app.use("/app/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
