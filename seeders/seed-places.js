const db = require("../models")

db.Place.create([
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/spencer-chow-PF_zcUW_NYU-unsplash.jpg",
    founded: 1989,
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "/images/allison-christine-nKzZTrJeM18-unsplash.jpg",
    founded: 2020,
  },
])
  .then(() => {
    // console.log('Success!')
    process.exit()
  })
  .catch((err) => {
    // console.log('Failure!', err)
    process.exit()
  })
