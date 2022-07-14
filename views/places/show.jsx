const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main className="container-fluid">
        <div className="show-page-container">
          <div className="show-top">
            <img src={data.place.pic} alt="Default picture of restaurant" />
            <div className="text">
              <div>
                <h2>{data.place.name}</h2>
                <h4>Rating</h4>
              </div>
              <div>
                <h2>Description</h2>
                <p>
                  Located in {data.place.city}, {data.place.state} and serving{" "}
                  {data.place.cuisines}
                </p>
              </div>
            </div>
          </div>

          <div className="show-bottom">
            <h3>Comments</h3>
            <p>No comments yet!</p>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
