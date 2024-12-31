import React, { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_PATHNAME } from "../../router";

// note:
// component: a js function, and return markup

// function AppDemo(){
//     const name:string = "rui liu";
//     return <div>{name}</div>; //JSX
// }

const DemoNoteOne: FC = () => {
  const nav = useNavigate();
  const name: string = "rui liu";
  return (
    <div>
      <button
        style={{
          margin: "30px auto",
          display: "block",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "pink",
        }}
        onClick={() => nav(HOME_PATHNAME)}
      >
        To My HomeWork Page
      </button>

      <UserDemo />

      <UserDemoTWO userName={name} age="100" email="ruiliu@ruiliu.com" />

      {/* create a input, and event handle  */}
      <AgeCheck />

      {/* render a array list */}
      <RenderList />

      {/* render a object list */}
      <RenderObj />
      {/* use useRef */}
      <DemoRef />
    </div>
  );
};

//1: all JSX inside of the HTML
const UserDemo: FC = () => {
  const name = <h1>Rui Liu</h1>;
  const age = <h2>27</h2>;
  const email = <h2>ruiliu@ruiliu.com</h2>;

  return (
    <>
      <div>
        {name}
        {age}
        {email}
      </div>
    </>
  );
};

//2:
// create child component: User
// use props to pass data
//In typescript: create interface UserDemoProps to ensure the props type

interface UserDemoProps {
  userName: string;
  age: string;
  email: string;
}
const UserDemoTWO: FC<UserDemoProps> = (props) => {
  return (
    <div>
      <h1>Name: {props.userName}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  );
};

//3: conditional Rendering
//create a input (enter the age), a click button,
//show different content when enter different age

const AgeCheck: FC = () => {
  const [age, setAge] = useState<number | null>(null);
  const [contentTip, setContentTip] = useState<JSX.Element | null>(null); //let contentTip: any = null;

  function handleClick(): void {
    if (age !== null) {
      setContentTip(age >= 18 ? <h1>OVER 18 AGE</h1> : <h1>UNDER 18 AGE</h1>);
    } else {
      setContentTip(<h1>please enter your age</h1>);
    }
  }

  return (
    <div>
      <p>create a input, and type you age</p>
      <input
        onChange={(e) => {
          let inputAge = parseInt(e.target.value, 10);
          setAge(isNaN(inputAge) ? null : inputAge);
        }}
        type="text"
        placeholder="type your age here"
        name="name"
      />
      <button onClick={handleClick}>Click Me</button>
      {/* {age !== null ? (age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>) : (<h1>please enter your age</h1>)} */}
      <h1>{contentTip}</h1>
    </div>
  );
};

//4: rendering lists
//render array
const RenderList: FC = () => {
  const nameLists: string[] = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

  return (
    <div>
      <p>rendering lists using map()</p>
      <ul>
        {nameLists.map((name: string, key: number) => {
          return <ChildList name={name} key={key} />;
        })}
      </ul>
    </div>
  );
};

interface childProps {
  name: string;
  key: number;
}
const ChildList: FC<childProps> = (props) => {
  return <li>{props.name}</li>;
};

// rendering objects
const userObjects = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  },
  {
    id: 2,
    name: "Bob",
    age: 32,
    email: "bob@example.com",
  },
  {
    id: 3,
    name: "Charlie",
    age: 29,
    email: "charlie@example.com",
  },
];

const RenderObj: FC = () => {
  return (
    <div>
      <p>create a object lists and using map()</p>
      {userObjects.map((user, key) => {
        return (
          <ChildObj
            key={user.id}
            id={user.id}
            age={user.age}
            name={user.name}
          />
        );
      })}
    </div>
  );
};

interface objListsProps {
  id: number;
  name: string;
  age: number;
}

const ChildObj: FC<objListsProps> = (props) => {
  return (
    <div>
      {props.id}:{props.name}:{props.age}
    </div>
  );
};

//4: advanced react
//useRef

const DemoRef: FC = () => {
  const [name, setName] = useState("");
  //   const prevName = useRef("");

  //1:not cause rerender the component
  //   useEffect(() => {
  //     count.current = count.current + 1;
  //   });
  //2: persisting the previous value, not only access the dom
  //   useEffect(() => {
  //     prevName.current = name;
  //   }, [name]);

  // 3: access dom element

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    // inputRef.current.focus();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="contentBox">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      {/* <div>I rendered {count.current} times</div> */}
      {/* <div>My name is used to be {prevName.current}</div> */}
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

// 5: custom hooks
//fetch data
// const useFetch = (url: string) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<null | string>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setData(result);
//         setLoading(false)
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// use useFetch hook
// const DataDisplay = (api: string) => {
//   //use hook
//   const { data, loading } = useFetch(api);

//   return loading ? (
//     <div>Loading...</div>
//   ) : (
//     <div className="contentBox">{JSON.stringify(data)}</div>
//   );
// };

// custom hook : useDebounce

export default DemoNoteOne;
