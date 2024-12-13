import React, { useState, useEffect } from "react";

export default function RadioGroup() {
  const [checkedOption, setCheckedOption] = useState<string>("");

  const handleChange = (e: any) => {
    //选中谁，checkedOption就设置为谁
    setCheckedOption(e.target.value);
  };

  // useEffect(() => console.log(checkedOption), [handleChange]);

  return (
    <div>
      <label htmlFor="radioOne">
        <input
          type="radio"
          checked={checkedOption === "option one"}
          id="radioOne"
          name="radioOne"
          value="option one"
          onChange={handleChange}
        />
        option one
      </label>
      <label htmlFor="radioTwo">
        <input
          type="radio"
          checked={checkedOption === "option two"}
          id="radioTwo"
          name="radioTwo"
          value="option two"
          onChange={handleChange}
        />
        option two
      </label>
      <label htmlFor="radioThree">
        <input
          type="radio"
          checked={checkedOption === "option three"}
          id="radioThree"
          name="radioThree"
          value="option three"
          onChange={handleChange}
        />
        option three
      </label>
    </div>
  );
}
