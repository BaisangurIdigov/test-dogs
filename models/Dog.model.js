const {Schema, model} = require("mongoose");

const dogSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  breedId: {
    type: Schema.Types.ObjectId,
    ref: "Breed",
  },
});

const Dog = model("Dog", dogSchema);
module.exports = Dog;