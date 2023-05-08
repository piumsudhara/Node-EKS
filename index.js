const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => res.json("Hello From Amazon EKS"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));