const db = require("../models")

db.Place.create([,
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "/images/allison-christine-nKzZTrJeM18-unsplash.jpg",
    founded: 2020,
  },
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/spencer-chow-PF_zcUW_NYU-unsplash.jpg",
    founded: 1989,
  },
  {
    name: "Grub Hut",
    city: "Grubbington",
    state: "GA",
    cuisines: "stuff you need chopsticks for",
    pic: "https://images.squarespace-cdn.com/content/v1/5db0b43ad5437e7e86fb6808/1572817111639-YZ9U0UEJ48U69EUDRJZ1/food-in-ancient-japan-3.jpg",
    founded: 2020,
  },
  {
    name: "Vittle House",
    city: "Amarillo",
    state: "TX",
    cuisines: "Tender Vittles",
    https: "//www.thedailymeal.com/img/gallery/what-did-a-typical-cowboy-diet-consist-of-in-the-old-west/l-intro-1684775466.jpg",
    founded: 1895,
  },
  {
    name: "NAANHOUSE",
    city: "NAANVILLE",
    state: "NE",
    cuisines: "NAAN",
    pic: "https://www.cookingclassy.com/wp-content/uploads/2021/01/naan-30.jpg",
    founded: 1976,
  },
  {
    name: "The Happy Skillet",
    city: "Eggsboro",
    state: "AL",
    cuisines: "everything breakfast",
    pic: "https://images.unsplash.com/photo-1518476381266-33596bddffc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    founded: 2019,
  },
  {
    name: "Yummo",
    city: "Toasted Trails",
    state: "DE",
    cuisines: "fancy toast",
    pic: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    founded: 2018,
  },
  {
    name: "El Pollo Alegre",
    city: "San Diego",
    state: "CA",
    cuisines: "pollo asado, y más",
    pic: "https://i411.com/en/business/picture/63e3fc16e2b96c59be62ba21",
    founded: 1950,
  }
])
  .then(() => {
    // console.log('Success!')
    process.exit()
  })
  .catch((err) => {
    // console.log('Failure!', err)
    process.exit()
  })
