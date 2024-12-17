import React from "react";
import { Link } from "react-router-dom";
import "../styles/hw.css";
import {
  SHOPPING_CART,
  FORM_CHECKBOX_14,
  TIC_TAC,
  HW_DAY_11,
  LC_One,
  HW_NOTE,
} from "../router";

function Home() {
  return (
    <div className="contentBox">
      <h1>My Note and Homework</h1>
      <h2>
        <Link to={SHOPPING_CART}>Shoping Cart Day 14 HW</Link>
      </h2>
      <h2>
        <Link to={FORM_CHECKBOX_14}>Form Checkbox Day 14 HW</Link>
      </h2>
      <h2>
        <Link to={TIC_TAC}>TIC TAC Game Day 14 HW</Link>
      </h2>
      <h2>
        <Link to={HW_DAY_11}>show or disabled button option</Link>
      </h2>
      <h2>
        <Link to={LC_One}>To Live coding page</Link>
      </h2>
      <h2>
        <Link to={HW_NOTE}>To my note page</Link>
      </h2>
    </div>
  );
}

export default Home;
