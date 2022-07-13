const React = require("react");
const Def = require("../default");

function Index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={place.pic} className="card-img-top" alt={place.name}></img>
        <div className="card-body">
          <h5 className="card-title">{place.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{place.cuisines}</h6>
          <p className="card-text">
            Located in {place.city}, {place.state}
          </p>
        </div>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave about</h1>
        <div className="grid-layout">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = Index;
