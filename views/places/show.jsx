const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h4>No comments yet!</h4>;

  let rating = <p>Not yet rated!</p>;

  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐️";
    }

    rating = <p>{stars} stars</p>;
  }

  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="comment-container">
          <div>
            <h3>-{c.author}</h3>
            <h2 className="rant">{c.rant ? "Rant! " : "Rave! "}</h2>
            <p>{c.content}</p>
          </div>
          <div className="right">
            <h5>Rating: {c.stars}</h5>
            <form
              method="POST"
              action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
            >
              <input
                type="submit"
                className="btn btn-danger"
                value="Delete Comment"
              />
            </form>
          </div>
        </div>
      );
    });
  }

  let commentform = (
    <form method="POST" action={`/places/${data.place.id}/comment`}>
      <div className="form-group">
        <label htmlFor="author">Name</label>
        <input className="form-control" id="author" name="author" required />
      </div>
      <div className="form-group">
        <label htmlFor="content">Comment</label>
        <input className="form-control" id="content" name="content" />
      </div>
      <div className="form-group">
        <label htmlFor="stars">Rate</label>
        <input
          className="form-control"
          id="stars"
          name="stars"
          type="number"
          step=".5"
          min="0"
          max="5"
        />
      </div>
      <div className="form-group">
        <label htmlFor="rant">Rant</label>
        <input className="form-check" id="rant" name="rant" type="checkbox" />
      </div>
      <input className="btn btn-primary" type="submit" value="Add Comment" />
    </form>
  );

  return (
    <Def>
      <main className="container-fluid">
        <div className="show-page-container">
          <div className="show-top">
            <div>
              <img src={data.place.pic} alt="Default picture of restaurant" />
              <p>
                Located in {data.place.city}, {data.place.state}
              </p>
            </div>
            <div className="text">
              <div>
                <h2>{data.place.name}</h2>
                <h4>Rating</h4>
                {rating}
              </div>
              <div>
                <h2>Description</h2>
                <h4>{data.place.showEstablished()}</h4>
                <p>Serving {data.place.cuisines}</p>
              </div>
              <div className="btn-container">
                <a
                  href={`/places/${data.place.id}/edit`}
                  className="btn btn-lg"
                >
                  <i className="bi bi-pencil-square"></i>
                </a>

                <form
                  method="POST"
                  action={`/places/${data.place.id}?_method=DELETE`}
                >
                  <button type="submit" className="btn btn-lg">
                    <i className="bi bi-trash3"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="show-bottom">
            <h2>Comments</h2>
            <div className="content">
              <div className="comments-container">{comments}</div>
              <div className="comments-form-container">{commentform}</div>
            </div>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
