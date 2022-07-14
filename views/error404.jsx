const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main className="container-fluid">
        <div className="error-page-container">
          <h1>404: PAGE NOT FOUND</h1>
          <h4>Oops, sorry, we are unable to find this page!</h4>
          <div className="error-image-container">
            <img src="/images/cookie-the-pom-gySMaocSdqs-unsplash.jpg" alt="" />
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
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
