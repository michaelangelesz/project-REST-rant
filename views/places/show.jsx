const React = require("react")
const Def = require("../default")

function show(data) {
  return (
    <Def title="Restaurant Details">
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
            <p>
              Located in {data.place.city}, {data.place.state}
            </p>
            <div className="show-container">
              <div className="row">
                <div className="description col-sm-12 col-md-12 col-lg-6">
                  <h2 className="mb-4">Description</h2>
                  <p className="show">{data.place.showEstablished()} </p>
                  <p>Serving {data.place.cuisines}</p>
                </div>
                <div className="rating col-sm-12 col-md-12 col-lg-6">
                  <h2 className="mb-4">Rating</h2>
                  <p className="show">Not Rated </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edits">
          <a
            href={`/places/${data.id}/edit`}
            className="btn btn-warning"
            style={{ display: "inline-block" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>{" "}
            EDIT
          </a>
          <form
            method="POST"
            action={`/places/${data.id}?_method=DELETE`}
            style={{ display: "inline-block" }}
          >
            <button type="submit" className="btn btn-danger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>{" "}
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
