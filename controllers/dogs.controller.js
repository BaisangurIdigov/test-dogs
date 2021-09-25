const Dog = require("../models/Dog.model");
const Breed = require("../models/Breed.model");
const axios = require("axios");

module.exports.dogController = {
  getBreeds: async (req, res) => {
    const breeds = await Breed.find();
    return res.json(breeds);
  },
  getDogAPI: async (req, res) => {
    try {
      const dogCount = await Dog.countDocuments();
      for (let i = 0; i < 100; i++) {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        console.log(response.data.message);
        if (response.status === 200) {
          const [, breed, title] = response.data.message.match(
            /([\w+_-]+)\/([\w_-]+)\.(gif|jpe?g|png)$/i
          );
          console.log(breed, title);
          let breedId;
          const candidate = await Breed.findOne({ name: breed });
          if (candidate) {
            breedId = candidate._id;
          } else {
            const newBreed = await Breed.create({ name: breed });
            breedId = newBreed._id;
          }
          try {
            if (dogCount < 100) {
              await Dog.create({ name: title, breedId });
            } else if (dogCount >= 100) {
              console.log("100 достигнут максимум");
              break;
            }
          } catch (e) {
            console.log(`Ошибка: ${e.toString()}`);
          }
        }
      }
    } catch (e) {
      console.log(`Ошибка: ${e.toString()}`);
    }
  },
  getDogMongoDB: async (req, res) => {
    try {
      const search = req.query.search || false;
      const { page } = req.query;
      const pages = page ? Number(page) : 1;

      const findDog = {};

      if (search !== "undefined") {
        findDog.name = new RegExp(search);
      } else {
        findDog
      }

      const dogs = await Dog.find(findDog)
        .populate("breedId")
        .limit(10)
        .skip((pages - 1) * 10);

      return res.json({ pages, dogs });
    } catch (e) {
      console.log(`Ошибка: ${e.toString()}`);
    }
  },
};
