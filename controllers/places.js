const router = require("express").Router();
const places = require("../models/places");

router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/images/paish-zaini--9UJTnXpUXM-unsplash.jpg'
    // https://unsplash.com/photos/-9UJTnXpUXM
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('./places')
})

module.exports = router;
