const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="images/heather-wilde-1ueCS0gHo_M-unsplash.jpg"
            alt="a steaming hot pizza, with cheese and toppings, photographed from the side"
            className="width-image"
          />
          Photo by{" "}
          <a href="https://unsplash.com/@heather_wilde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Heather Wilde
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/vegetarian-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
        <a href="/places">
          <button className="btn-primary">Let's eat!!!</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
