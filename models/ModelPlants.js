const mongoose = require("mongoose");

const PlantsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  size: [{ type: String }],
  price: {
    type: Number,
    required: true,
  },
  images: [{ type: String }],
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  tags: [{ type: String }],
  description: String,
});

const ModelPlants = mongoose.model("plant", PlantsSchema);

module.exports = ModelPlants;
