const mongoose = require("mongoose");

const FoodsSchema = mongoose.Schema(
  {
    name: { type: String },
    ingredients: { type: String },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Foods = mongoose.model("foods", FoodsSchema);
module.exports = Foods;
