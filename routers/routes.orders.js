const express = require("express");
const controller = require("../controllers/controllers.orders");

const router = express.Router();

router
    .post("/", controller.createOrder)
    .get("/", controller.getOrdersByAccountId);

module.exports = router;
