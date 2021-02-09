const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.REACT_APP_PORT || 5000;

const app = express.listen(port, () => {
  console.log(`Connected to Server on port ${port}`);
});
