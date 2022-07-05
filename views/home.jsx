const React = require("react");
const Def = require("./default");

function home({ title }) {
  return (
    <Def title={title}>
      <div id="banner">
        <img src="./images/alex-haney-CAhjZmVk5H4-unsplash.jpg" alt="" />
      </div>
      <h1>Home Page</h1>
      <main></main>
    </Def>
  );
}

module.exports = home;
