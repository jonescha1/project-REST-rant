const React = require("react");
const Def = require("./default");

function home({ title }) {
  return (
    <Def title={title}>
      <main>
        <div className="overlay">
          <div className="container">
            <div className="banner">
              <h2>This will be in bold and big letters!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure
                obcaecati perspiciatis ea tempora molestias, fuga pariatur ipsa
                ut veniam.
              </p>
            </div>
          </div>
        </div>
        <img
          className="homepage-image"
          src="./images/brooke-lark-4J059aGa5s4-unsplash.jpg"
          alt="food plate background"
        />
        <h4 id="photo-credits">
          Photo by{" "}
          <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Brooke Lark
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </h4>
      </main>
    </Def>
  );
}

module.exports = home;
