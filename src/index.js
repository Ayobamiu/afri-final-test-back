const express = require("express");
const taskRouter = require("./routers/task");
require("./db/mongoose");

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(taskRouter);

app.listen(PORT, () => {
  console.log("on PORT " + PORT);
});
