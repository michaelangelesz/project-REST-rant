const React = require("react")
const Def = require("./default")

function error404() {
  return (
    <Def title="Error 404">
      <main>
        <h1>PAGE NOT FOUND</h1>
        <p>Uh oh, no food out here!</p>
        <img
          src="images/hannah-busing-0BhSKStVtdM-unsplash.jpg"
          alt="a farmhouse tableware set with plates and silver to both sides and napkins, but no food"
          className="width-image"
        />
        <div className="photographer">
          Photo by{" "}
          <a href="https://unsplash.com/@hannahbusing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Hannah Busing
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/0BhSKStVtdM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
        <a href="/places">
          <button className="btn-primary">Back to the food</button>
        </a>
        <div className="foot"></div>
      </main>
    </Def>
  )
}

module.exports = error404
