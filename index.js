const express = require("express");
const dbCONFIG = require("./config/config");
const app = express();
const port = process.env.PORT || 5000;
const carDbRoutes = require("./routes/carDbRoutes");
app.use(express.json());

app.use("/api/cars", carDbRoutes);

app.listen(port, () => {
  console.log("server is running");
});
