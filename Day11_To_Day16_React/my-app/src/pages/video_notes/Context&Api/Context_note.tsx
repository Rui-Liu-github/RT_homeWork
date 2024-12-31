import React, { createContext, useContext, useState } from "react";

//pass state as props in components
// but if there are many components want to get the state data, we need to pass in all
// function Parent() {
//     const [userName, setUserName] = useState('');

//     return (
//         <div>
//             <Child setUserName = {setUserName}/>
//         </div>
//     )
// }

// function Child({setUserName}:any) {

//     return <GrandChild setUserName = {setUserName}/>
// }

// function GrandChild({setUserName}:any) {

//     return (
//         <div>
//             <button
//             onClick={() => {
//                 setUserName('swdsww');
//             }}
//             ></button>
//         </div>
//     )
// }

// method2: use Context:  createContext, useContext()

interface AppContextType {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | null>(null);

function Parent() {
  const [userName, setUserName] = useState<string>("");

  return (
    //create context provider and pass data
    <AppContext.Provider value={{ userName, setUserName }}>
      <div>
        {/* <Child /> */}
        <Child1 />
        <Child2 />
      </div>
    </AppContext.Provider>
  );
}

// function Child() {
//   // const {userName} = useContext(AppContext)

//   return <GrandChild />;
// }

// function GrandChild() {
//   //use context
//   const context = useContext(AppContext);

//   if (!context) {
//     throw new Error("GrandChild must be used within an AppContext.Provider");
//   }

//   const { setUserName } = context;

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setUserName("swdsww");
//         }}
//       ></button>
//     </div>
//   );
// }

// also can have many child
//have a bunch of sibling components, each of them have their purpose

function Child1() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("GrandChild must be used within an AppContext.Provider");
  }
  const { userName } = context;
  return <h1>{userName}</h1>;
}

function Child2() {
  //use context
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("GrandChild must be used within an AppContext.Provider");
  }

  const { setUserName } = context;

  return (
    <div>
      <button
        onClick={() => {
          setUserName("swdsww");
        }}
      ></button>
    </div>
  );
}

//using context api
