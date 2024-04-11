const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", async function (req, res) {
  res.render("home");
});

router.get("/comments", async function (req, res) {
  const comments = await db.getDb().collection("comments").find().toArray();

  res.json(comments);
});

router.post("/comments", async function (req, res) {
  const newComment = {
    name: req.body.name,
    comment: req.body.comment,
  };

  await db.getDb().collection("comments").insertOne(newComment);
  res.redirect("/");
});

module.exports = router;
