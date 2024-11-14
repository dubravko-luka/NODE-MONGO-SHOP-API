const express = require("express");
const createError = require("http-errors");
const router = express.Router();

const Product = require("../Model/Product");
router.get("/", async (req, res, next) => {
  try {
    const NSXBlueExchange = [],
      NSXOwen = [],
      NSXNinomaxx = [],
      NSXCanifa = [],
      NSXRoutine = [],
      NSXEvadeEva = [];
    const BlueExchange = await Product.find({ key: "blueexchange" });
    const Owen = await Product.find({ key: "owen" });
    const Ninomaxx = await Product.find({ key: "ninomaxx" });
    const Canifa = await Product.find({ key: "canifa" });
    const Routine = await Product.find({ key: "routine" });
    const EvadeEva = await Product.find({ key: "evadeEva" });
    BlueExchange.forEach((BlueExchange) => {
      NSXBlueExchange.push(BlueExchange.NSX.trim().toLowerCase());
    });

    Owen.forEach((Owen) => {
      NSXOwen.push(Owen.NSX.trim().toLowerCase());
    });

    Ninomaxx.forEach((Ninomaxx) => {
      NSXNinomaxx.push(Ninomaxx.NSX.trim().toLowerCase());
    });

    Canifa.forEach((Canifa) => {
      NSXCanifa.push(Canifa.NSX.trim().toLowerCase());
    });

    Routine.forEach((Canifa) => {
      NSXRoutine.push(Canifa.NSX.trim().toLowerCase());
    });

    EvadeEva.forEach((Canifa) => {
      NSXEvadeEva.push(Canifa.NSX.trim().toLowerCase());
    });
    res.json({
      BlueExchange: [...new Set(NSXBlueExchange)],
      Owen: [...new Set(NSXOwen)],
      Ninomaxx: [...new Set(NSXNinomaxx)],
      Canifa: [...new Set(NSXCanifa)],
      Routine: [...new Set(NSXRoutine)],
      EvadeEva: [...new Set(NSXEvadeEva)],
    });
  } catch (error) {
    res.send(createError(404, "no product found"));
  }
});

module.exports = router;
