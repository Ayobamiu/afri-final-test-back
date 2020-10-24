const express = require("express");
const taskRouter = require("./routers/task");
require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(taskRouter);

app.listen(3003, () => {
  console.log("on PORT 3003");
});
