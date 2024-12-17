import React, { Component, useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchPostByIdApp() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState<Post | {}>({});

  const { userId, id, title, body } = post as Post;

  // fetch data function
  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      const data = await response.json();
      setPost(data);
      console.log(data);
    } catch (err) {
      setPost({});
      console.log(err);
    }
  };

  //render on mount
  useEffect(() => {
    fetchPost();
  }, []);

  //render according to id update
  useEffect(() => {
    //call fetch api every 10 s , id = id + 1
    let timer: number | null = null;
    timer = setInterval(() => {
      setPostId((prev) => prev + 1);
      fetchPost();
    }, 10000);

    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
    };
  }, [postId]);

  const handleNextPost = () => {
    setPostId((prev) => prev + 1);
    fetchPost();
  };

  return (
    <div>
      <h2>FetchPostByIdApp</h2>
      <div>Post Id: {id}</div>
      <div>Title: {title}</div>
      <button onClick={handleNextPost}>Next Post</button>
    </div>
  );
}

// export default class FetchPostByIdApp extends Component<
//   {},
//   { postId: number; post: Post | {}; randomState: boolean }
// > {
//   state = {
//     postId: 1,
//     post: {},
//     randomState: true,
//   };

//   componentDidMount() {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
//       .then((res) => res.json())
//       .then((data: Post) => {
//         this.setState({ post: data });
//       })
//       .catch((err) => {
//         console.log("err", err);
//         return err.message;
//       });
//   }

//   componentDidUpdate(prevProps: any, prevState: any) {
//     if (prevState.postId !== this.state.postId) {
//       fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
//         .then((res) => res.json())
//         .then((data: Post) => {
//           this.setState({ post: data });
//         })
//         .catch((err) => {
//           console.log("err", err);
//           return err.message;
//         });
//     }
//   }

//   handleNextPost = () => {
//     this.setState({ postId: this.state.postId + 1 });
//   };

//   render() {
//     const { userId, id, title, body } = this.state.post as Post;
//     return (
//       <div>
//         <h2>Current Post Id: {this.state.postId}</h2>
//         <div>Show Title: {title}</div>
//         <button onClick={this.handleNextPost}>Next Post</button>
//         <button
//           onClick={() => {
//             this.setState({ randomState: !this.state.randomState });
//           }}
//         >
//           rerender
//         </button>
//       </div>
//     );
//   }
// }
