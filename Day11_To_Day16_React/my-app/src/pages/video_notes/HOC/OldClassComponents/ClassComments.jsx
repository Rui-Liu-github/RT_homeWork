import React from "react";

export default class ClassComments extends React.Component {
  state = {
    comments: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ comments: data });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) return <div>loading...</div>;

    return (
      <div>
        <h1>comments</h1>
        <div>
          {this.state.comments.map((post) => {
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
