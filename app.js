const express = require("express");
const app = express();

app.use(express.json());

const editImageRouter = require("./routes/edit-image");
app.use("/editImage", editImageRouter);

app.listen(3000, () => console.log("Server Started"));
