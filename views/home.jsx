const React = require("react");
const Def = require("./default");

function home() {
  const title = "REST-Rant - A Place to rate Restaurants";
  return (
    <Def title={title}>
      <main className="container-fluid">
        <h1>Home Page</h1>
        <div className="page-image">
          <img src="./images/brooke-lark-4J059aGa5s4-unsplash.jpg" alt="" />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Brooke Lark
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/visual/248afb17-acd6-49fe-9941-592bb84bf3c8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
