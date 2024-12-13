import React, { Component, useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// export default function FetchPostByIdApp() {
//   const [postId, setPostId] = useState(1);
//   const [post, setPost] = useState<Post | {}>({});

//   const { userId, id, title, body } = post as Post;

//   useEffect(() => {
//     // string literal / string interpolation
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then((res) => res.json())
//       .then((data: Post) => {
//         setPost(data);
//       });
//   }, [postId]);

//   const handleNextPost = () => {
//     setPostId((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <h2>FetchPostByIdApp</h2>
//       <div>Post Id: {id}</div>
//       <div>Title: {title}</div>
//       <button onClick={handleNextPost}>Next Post</button>
//     </div>
//   );
// }

export default class FetchPostByIdApp extends Component<
  {},
  { postId: number; post: Post | {}; randomState: boolean }
> {
  state = {
    postId: 1,
    post: {},
    randomState: true,
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
      .then((res) => res.json())
      .then((data: Post) => {
        this.setState({ post: data });
      });
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.postId !== this.state.postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
        .then((res) => res.json())
        .then((data: Post) => {
          this.setState({ post: data });
        });
    }
  }

  handleNextPost = () => {
    this.setState({ postId: this.state.postId + 1 });
  };

  render() {
    const { userId, id, title, body } = this.state.post as Post;
    return (
      <div>
        <h2>Current Post Id: {this.state.postId}</h2>
        <div>Title: {title}</div>
        <button onClick={this.handleNextPost}>Next Post</button>
        <button
          onClick={() =>
            this.setState({ randomState: !this.state.randomState })
          }
        >
          rerender
        </button>
      </div>
    );
  }
}
