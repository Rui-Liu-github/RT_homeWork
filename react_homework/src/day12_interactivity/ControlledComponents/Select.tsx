import React, { useState } from "react";

export default function Select() {
  const [to, setTo] = useState<string>("");

  const handleChange = (e: any) => {
    setTo(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="selectHW">selectLabel: </label>
        <select onChange={handleChange} id="selectHW" value={to}>
          <option value=""></option>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
          <option value="Ruby">Ruby</option>
        </select>
      </form>
    </div>
  );
}
