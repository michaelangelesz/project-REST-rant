const React = require("react")
const Def = require("./default")

function Home() {
  return (
    <Def title="REST-Rant Home">
      <main>
        <h1>
          <a
            href="/places"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            REST-Rant
          </a>
        </h1>
        <div>
          <a href="/places">
            <img
              src="images/heather-wilde-1ueCS0gHo_M-unsplash.jpg"
              alt="a steaming hot pizza, with cheese and toppings, photographed from the side"
              className="width-image"
            />
          </a>
          <div className="photographer">
            Photo by{" "}
            <a href="https://unsplash.com/@heather_wilde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Heather Wilde
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/vegetarian-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Let's eat!!!</button>
        </a>
        <div className="foot"></div>
      </main>
    </Def>
  )
}

module.exports = Home
