import React, { useRef } from "react";

//create a ramdom ID
// persists across renders using useRef
function Input({ id }: { id?: string }) {
  const uuid = useId(id);
  console.log("uuid", uuid);
  return (
    <div>
      <label htmlFor={uuid}>Input label</label>
      <input type="text" id={uuid} />
    </div>
  );
}

export function UseID() {
  return (
    <div style={{ margin: "50px" }}>
      <Input id="my-id" />
      <Input />
    </div>
  );
}

//create
const useId = (id?: string): string => {
  const idRef = useRef<string | null>(null);

  if (idRef.current === null) {
    idRef.current = `id-${randomString(2, 10)}`;
  }

  return idRef.current;
};

function randomString(min: number, max: number) {
  let returnStr = "",
    range = max ? Math.round(Math.random() * (max - min)) + min : min,
    arr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

  for (var i = 0; i < range; i++) {
    let index = Math.round(Math.random() * (arr.length - 1));
    returnStr += arr[index];
  }
  return returnStr;
}

export default UseID;
