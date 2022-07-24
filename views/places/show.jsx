const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h4>No comments yet!</h4>;

  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="container-comment">
          <div>
            <h3>-{c.author}</h3>
            <h2 className="rant">{c.rant ? "Rant! " : "Rave! "}</h2>
            <h4>{c.content}</h4>
          </div>
          <div>
            <h4 className="rating">Rating: {c.stars}</h4>
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
              </div>
              <div>
                <h2>Description</h2>
                <h4>{data.place.showEstablished()}</h4>
                <p>Serving {data.place.cuisines}</p>
              </div>
              <div className="btn-container">
                <a href={`/places/${data.id}/edit`} className="btn btn-lg">
                  <i className="bi bi-pencil-square"></i>
                </a>

                <form
                  method="POST"
                  action={`/places/${data.id}?_method=DELETE`}
                >
                  <button type="submit" className="btn btn-lg">
                    <i className="bi bi-trash3"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="show-bottom">
            <h2 className="comments-title">Comments</h2>
            <div className="content">
              <div className="comments">{comments}</div>
              <div className="comments-form">{commentform}</div>
            </div>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
