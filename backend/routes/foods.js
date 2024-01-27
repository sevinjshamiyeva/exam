const express = require("express");
const router = express.Router();
const Foods = require("../models/foodsModel");

router.post("/", async (req, res) => {
  const newFoods = new Foods(req.body);
  await newFoods.save();
  res.send(newFoods);
});

//get
router.get("/", async (req, res) => {
  const allproducts = await Foods.find();
  res.send(allproducts);
});
//get by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const allproducts = await Foods.findById(id);
  res.send(allproducts);})
//delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleteproducts = await Foods.findByIdAndDelete(id);
  res.send(deleteproducts);
});

module.exports = router;
