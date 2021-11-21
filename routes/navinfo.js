const { Router } = require("express");
const router = Router();
const Navinfo = require("../models/NavInfo");
// const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.send("hello Code");
});

router.post("create/navinfo", async (req, res) => {
  const { navicon, navtitle } = req.body;
  const navinfo = new Navinfo({
    navicon,
    navtitle,
  });

  res.json(navinfo);
  await navinfo.save();
});

router.get("/read/navinfo", async (req, res) => {
  const navinfo = await Navinfo.find();
  res.json(navinfo);
});

// router.get("/read/navinfo/:id", async (req, res) => {
//   const navinfo = await Navinfo.aggregate([
//     {
//       $match: {
//         _id: mongoose.Types.ObjectId(req.params.id),
//       },
//     },
//     {
//       $lookup: {
//         from: "movies",
//         localField: "_id",
//         foreignField: "categoryId",
//         as: "movies",
//       },
//     },
//     {
//       $unwind: {
//         path: "$movies",
//       },
//     },
//     {
//       $group: {
//         _id: {
//           _id: "$_id",
//         },
//         movies: {
//           $push: "$movies",
//         },
//       },
//     },
//   ]);

//   res.json(navinfo);
// });

module.exports = router;
