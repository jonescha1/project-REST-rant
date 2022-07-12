const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main className="container-fluid">
        <h1>404: PAGE NOT FOUND</h1>
        <h4>Oops, sorry, we are unable to find this page!</h4>
        <div className="page-image">
          <img src="./images/cookie-the-pom-gySMaocSdqs-unsplash.jpg" alt="" />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@cookiethepom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Cookie the Pom
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
