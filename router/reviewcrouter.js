const express = require("express");
const { getacard, putacard, getdesc } = require("./../controller/reviewcontroller");
const fs = require("fs");
let reviewrouter = express.Router();
reviewrouter
    .route("/")
    .get(getacard)
    .post(postcard);
reviewrouter
    .route("/:id")
    .get(getdesc);
module.exports = reviewrouter;
