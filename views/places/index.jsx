const React = require("react");
const Def = require("../default");

function Index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <Def>
        <main>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}></img>
        </main>
      </Def>
    );
  });
  return (
    <Def>
      <main>
        <h1>Places Index Page</h1>
        {placesFormatted}
      </main>
    </Def>
  );
}

module.exports = Index;
