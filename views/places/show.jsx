const React = require("react")
const Def = require("../default")

function show(data) {
  return (
    <Def title="Restaurant Details">
      <head>
        <link rel="icon" type="image/png" href="favicons/wine.png" />
      </head>
      <main>
        <div className="row flex-column flex-md-row">
          <div className="col-md-4 p">
            <img
              src={data.place.pic}
              alt={data.place.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h1>{data.place.name}</h1>
            <h2 className="mb-4">Rating</h2>
            <p>Not Rated </p>
            <h2 className="mb-4">Description</h2>
            <p>
              Located in {data.place.city}, {data.place.state} and serving{" "}
              {data.place.cuisines}.
            </p>
          </div>
        </div>
        <div>
          <a
            href={`/places/${data.id}/edit`}
            className="btn btn-warning" style={{ display: "inline-block" }}>
            EDIT
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`} style={{ display: "inline-block" }}>
            <button type="submit" className="btn btn-danger">
              DELETE
            </button>
          </form>
        </div>
        <section className="comments-section bg-dark text-light py-5">
          <div className="container">
            <h2 className="comments-heading text-center mb-4">Comments</h2>
            <p className="comments">No comments yet!</p>
            {/* Add comments form and display logic here */}
          </div>
        </section>
        <div className="comment-foot"></div>
      </main>
    </Def>
  )
}

module.exports = show
