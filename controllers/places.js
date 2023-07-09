const router = require("express").Router();

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get("/", (req, res) => {
  let places = [
    {
      id: 0,
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "images/spencer-chow-PF_zcUW_NYU-unsplash.jpg",
      // https://unsplash.com/photos/PF_zcUW_NYU
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

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

module.exports = router;
