import React, { useEffect, useState } from "react";

export default function Checkbox() {
  const [checkedState, setCheckedstate] = useState({
    checkOne: false,
    checkTwo: false,
    checkThree: false,
  });

  const handleChange = (e: any) => {
    // setChecked(e.target.checked);
    const { name, checked } = e.target;
    setCheckedstate((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  useEffect(() => console.log(checkedState), [handleChange]); // check the updated status
  return (
    <div>
      <form>
        <label htmlFor="checkOne">
          <input
            type="checkbox"
            checked={checkedState.checkOne}
            onChange={handleChange}
            id="checkOne"
            name="checkOne"
          />
          checkOne
        </label>

        <label htmlFor="checkTwo">
          <input
            type="checkbox"
            checked={checkedState.checkTwo}
            onChange={handleChange}
            name="checkTwo"
            id="checkTwo"
          />
          checkTwo
        </label>

        <label htmlFor="checkThree">
          <input
            type="checkbox"
            checked={checkedState.checkThree}
            onChange={handleChange}
            id="checkThree"
            name="checkThree"
          />
          checkThree
        </label>
      </form>
    </div>
  );
}
