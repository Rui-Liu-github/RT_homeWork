import React from "react";
import withFetch from "./hoc/withFetch";

class ClassPosts extends React.Component {
  render() {
    const { loading, data: posts } = this.props;
    if (loading) return <div>loading...</div>;
    console.log("posts", posts);
    return (
      <div>
        <h1>Posts</h1>
        <div>
          {/* optional chaining */}
          {posts?.map((post) => {
            const { id, title } = post;
            return <div key={id}> {title}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default withFetch(
  ClassPosts,
  "https://jsonplaceholder.typicode.com/posts"
);
