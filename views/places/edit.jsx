const React = require("react")
const Def = require("../default")

function edit_form(data) {
  
  return (
    <Def title="Edit Restaurant">
      <main>
        <h1>Edit Restaurant</h1>
        <form
          method="POST"
          className="form-container"
          action={`/places/${data.place.id}?_method=PUT`}
        >
          <div className="row">
            <div className="form-group col-sm-6 col-md-6 col-lg-4">
              <label htmlFor="name">Restaurant Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                defaultValue={data.place.name}
                required
              />
            </div>
            <div className="form-group col-sm-6 col-md-6 col-lg-4">
              <label htmlFor="pic">Place Picture</label>
              <input
                className="form-control"
                id="pic"
                name="pic"
                defaultValue={data.place.pic}
              />
            </div>
            <div className="form-group col-sm-6 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input
                  className="form-control"
                  id="cuisines"
                  name="cuisines"
                  defaultValue={data.place.cuisines}
                  required
                />
              </div>
            </div>
            <div className="form-group col-sm-6 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="founded">Established</label>
                <input
                  className="form-control"
                  id="founded"
                  name="founded"
                  defaultValue={data.place.founded}
                />
              </div>
            </div>
            <div className="form-group col-sm-6 col-md-6 col-lg-4">
              <label htmlFor="city">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                defaultValue={data.place.city}
              />
            </div>
            <div className="form-group col-sm-6 col-md-6 col-lg-4">
              <label htmlFor="state">State</label>
              <input
                className="form-control"
                id="state"
                name="state"
                defaultValue={data.place.state}
              />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="✎ Submit" />
        </form>
        <div className="foot"></div>
      </main>
    </Def>
  )
}

module.exports = edit_form
