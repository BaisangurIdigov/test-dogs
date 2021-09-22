const Dog = require("../models/Dog.model")
const Breed = require("../models/Breed.model")

module.exports.dogController = {
  getDogAPI: async (req,res)=> {
    res.json("getDogAPI")
  },
  getDogMongoDB: async (req,res)=> {
    res.json("getDogMongoDB")
  }
}