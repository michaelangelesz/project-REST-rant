const db = require("../models")

// To use await, we need an async function.
async function seed() {
  // Get the place, H-Thai-ML
  let place = await db.Place.findOne({ name: "H-Thai-ML" })

  // Create a fake sample comment.
  let comment = await db.Comment.create(
    {
      author: "Famished Fran",
      rant: false,
      stars: 5.0,
      content: "Wow, simply amazing! Highly recommended!",
    }
  )

  // Add that comment to the place's comment array.
  place.comments.push(comment.id)

  // Add different comment on separate place
  let place2 = await db.Place.findOne({ name: "Grub Hut" })

  let comment2 = await db.Comment.create(
    {
      author: "Chopstick Charles",
      rant: false,
      stars: 5.0,
      content: "heck yea chopstick food",
    }
  )

  let comment3 = await db.Comment.create(
    {
      author: "Smart Samsara",
      rant: false,
      stars: 5.0,
      content: "I could tell from the description the food was going to be amazing",
    }
  )    

  place2.comments.push(comment2.id)
  place2.comments.push(comment3.id)
  
  //save the place now that it has comment
  await place.save()
  await place2.save()

  // Exit the program
  process.exit()
}

seed()
