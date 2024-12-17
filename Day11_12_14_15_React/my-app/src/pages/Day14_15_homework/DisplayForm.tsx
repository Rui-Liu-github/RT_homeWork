import React, { useEffect, useState } from "react";
import "../../styles/hw.css";

interface checkBoxType {
  item1: boolean;
  item2: boolean;
  item3: boolean;
}

function DisplayCheckBox() {
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [checkItems, setCheckItems] = useState<checkBoxType>({
    item1: false,
    item2: false,
    item3: false,
  });
  const [itemName, setItemName] = useState<string>("");

  function handleAllItems(e: any) {
    const { checked } = e.target;

    let items: checkBoxType = { ...checkItems };
    items = {
      item1: checked,
      item2: checked,
      item3: checked,
    };

    setCheckItems(items);
    setCheckAll(checked);
  }

  function handleItemChange(e: any) {
    const { name, checked } = e.target;
    console.log("who selected:", name);

    setCheckItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }
  // i spend a lot of time to iterate checkItems and filter
  useEffect(() => {
    const checkNames = { ...checkItems };
    const names = Object.entries(checkNames)
      .filter(([_, value]) => value) // change obj into array, just save value as true
      .map(([key]) => key) // get all valid key
      .join(", "); // into string

    setItemName(names);
  }, [checkItems]);

  return (
    <div className="contentBox">
      <h1>All the selected items:</h1>
      <h2>{itemName}</h2>

      <form className="form">
        <label htmlFor="selectAll">
          <input
            type="checkbox"
            checked={checkAll}
            onChange={handleAllItems}
            name="selectAll"
            id="selectAll"
          />
          SelectAll
        </label>

        <label htmlFor="item1">
          <input
            type="checkbox"
            checked={checkItems.item1}
            onChange={handleItemChange}
            name="item1"
            id="item1"
          />
          item1
        </label>

        <label htmlFor="item2">
          <input
            type="checkbox"
            checked={checkItems.item2}
            onChange={handleItemChange}
            name="item2"
            id="item2"
          />
          item2
        </label>

        <label htmlFor="item3">
          <input
            type="checkbox"
            checked={checkItems.item3}
            onChange={handleItemChange}
            name="item3"
            id="item3"
          />
          item3
        </label>
      </form>
    </div>
  );
}

export default DisplayCheckBox;
