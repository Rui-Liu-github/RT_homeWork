import React from "react";
import withFetch from "./withFetch";

class ClassComments extends React.Component {
  render() {
    const { loading, data: comments } = this.props;

    if (loading) return <div>loading...</div>;

    return (
      <div>
        <h1>comments</h1>
        <div>
          {comments?.map((post) => {
            const { id, email, body } = post;
            return (
              <div key={id}>
                <div>Email: {email}</div>
                <div>{body}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withFetch(
  ClassComments,
  "https://jsonplaceholder.typicode.com/comments"
);
