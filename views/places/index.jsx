const React = require("react");
const Def = require("../default");

function Index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <main>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}></img>
      </main>
    );
  });
  return (
    <Def title={data.title}>
      <h1>Places Index Page</h1>
      {placesFormatted}
    </Def>
  );
}

module.exports = Index;
