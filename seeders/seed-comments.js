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
  
  // Add different comment on place2
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

  // Add different comment on separate place
  let place3 = await db.Place.findOne({ name: "Coding Cat Cafe" })

  let comment4 = await db.Comment.create(
    {
      author: "Unsatisfied Uma",
      rant: true,
      stars: 1.0,
      content: "I asked for no onions and they put onions on my food. I will never go back!",
    }
  )

  place3.comments.push(comment4.id)

  // Add different comment on separate place
  let place4 = await db.Place.findOne({ name: "Vittle House" })

  let comment5 = await db.Comment.create(
    {
      author: "Rawhide Roxie",
      rant: false,
      stars: 4.5,
      content: "I love this place! I go there every day!",
    }
  )

  let comment6 = await db.Comment.create(
    {
      author: "Cactus Cole",
      rant: true,
      stars: 2.0,
      content: "couldn't get a drink refill :(",
    }
  )

  place4.comments.push(comment5.id)
  place4.comments.push(comment6.id)
  
  //save the place now that it has comment
  await place.save()
  await place2.save()
  await place3.save()
  await place4.save()

  // Exit the program
  process.exit()
}

seed()
