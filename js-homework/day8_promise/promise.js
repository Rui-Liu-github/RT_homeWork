export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  // return the posts

  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await res.json();
    return post;

  } catch(error) {
    return error.message;
  }
};

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("data", data);
//   });

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts" + id);
    const post = await res.json();
    return post;

  } catch(error) {
    return error.message;
  }

};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  const result = [];
  for (const orderNum of order) {
    const data = await promises[orderNum - 1];
    result.push(data);
  }
  return result;
};
