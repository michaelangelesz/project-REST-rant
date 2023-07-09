const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      id: 0,
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "images/kristina-truniak-cDKRNUG4uec-unsplash.jpg",
    },
    {
      id: 1,
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "images/allison-christine-nKzZTrJeM18-unsplash.jpg",
      // https://unsplash.com/photos/nKzZTrJeM18
    },
  ];
  res.render("places/index", { places });
});

module.exports = router;
