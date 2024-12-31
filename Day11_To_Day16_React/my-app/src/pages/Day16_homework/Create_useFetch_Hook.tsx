import React, { useEffect, useState } from "react";
import "../../styles/hw.css";

let api = "https://jsonplaceholder.typicode.com/posts";

function Create_useFetch_Hook() {
  // const [apiName, setApiName] = useState(api);
  return (
    <div className="contentBox">
      <PostList apiGet={api} />
    </div>
  );
}

//componnet
function PostList({ apiGet }: any) {
  // const { apiGet } = props;
  const { data, loading } = useFetch(apiGet);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="contentBox">
      {data?.map((item: any) => {
        const { id, title } = item;
        return <p key={id}>{title}</p>;
      })}
    </div>
  );
}

//Felix写的 useFetch的使用
// export default function FunctionPosts() {
//   const { loading, data: posts } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   if (loading) return <div>loading...</div>;

//   return (
//     <div>
//       <h1>Function posts</h1>
//       <div>
//         {posts?.map((post) => {
//           const { id, title } = post;
//           return <div key={id}> {title}</div>;
//         })}
//       </div>
//     </div>
//   );
// }

//create hook
// use generac ..<T>
const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("result", result);
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

//Felix 上课写的useFetch hook
// export default function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return { data, loading };
// }

export default Create_useFetch_Hook;
