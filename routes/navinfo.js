// const { Router } = require("express");
// const router = Router();
// const Navinfo = require("../models/NavInfo");
// // const mongoose = require("mongoose");

// router.get("/", (req, res) => {
//   res.send("hello Code");
// });

// router.post("create/navinfo", async (req, res) => {
//   const { navicon, navtitle } = req.body;
//   const navinfo = new Navinfo({
//     navicon,
//     navtitle,
//   });

//   res.json(navinfo);
//   await navinfo.save();
// });

// router.get("/read/navinfo", async (req, res) => {
//   const navinfo = await Navinfo.find();
//   res.json(navinfo);
// });

// module.exports = router;
