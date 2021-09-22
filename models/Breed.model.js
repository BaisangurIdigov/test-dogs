const {Schema, model} = require("mongoose");

const breedSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

const Breed = model("Breed", breedSchema);
module.exports = Breed;