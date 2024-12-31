import React from "react";

export default class ClassPosts extends React.Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) return <div>loading...</div>;

    return (
      <div>
        <h1>Posts</h1>
        <div>
          {this.state.posts.map((post) => {
            const { id, title } = post;
            return <div>{title}</div>;
          })}
        </div>
      </div>
    );
  }
}
