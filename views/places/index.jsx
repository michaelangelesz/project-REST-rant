const React = require("react")
const Def = require("../default")

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div key={place.id} className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
        <h2>
          <a href={`/places/${place.id}`}>{place.name}</a>
        </h2>
        <p className="text-center places">{place.cuisines}</p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center places">
          {place.city}, {place.state}
        </p>
        <p className="text-center places">Established in {place.founded}</p>
      </div>
    )
  })
  return (
    <Def title="Rants and Raves">
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
        <a href="/places/new">
          <button className="btn btn-primary">Add a new place</button>
        </a>
        <div className="foot"></div>
      </main>
    </Def>
  )
}

module.exports = index
