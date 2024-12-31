import React from "react";
import { Link } from "react-router-dom";
import "../styles/hw.css";
import {
  SHOPPING_CART,
  FORM_CHECKBOX_14,
  TIC_TAC,
  HW_DAY_11,
  SIMPLE_QUIZ_PROJECT,
  HW_NOTE,
  TODO_LIST,
  LIVE_CODING,
  LOGIN,
  FETCH_HOOK,
  USE_DISCLOSURE,
  USE_FORCE_UPDATE,
  USE_TOGGLE_HOOK,
  USE_ID_HOOK,
  USE_DEBOUNCE_HOOK,
  TODO_LIST_REDUCER,
  TODO_LIST_REDUX,
} from "../router";

function Home() {
  return (
    <div className="contentBox">
      <h1>My Note and Homework</h1>
      <h2>
        <Link to={TODO_LIST_REDUCER}>create todo list useReducer HW</Link>
      </h2>
      <h2>
        <Link to={TODO_LIST_REDUX}>create todo list use Redux HW</Link>
      </h2>
      <h2>
        <Link to={USE_DEBOUNCE_HOOK}>create useDebounce hook HW</Link>
      </h2>
      <h2>
        <Link to={USE_ID_HOOK}>create UseId HOOK HW</Link>
      </h2>
      <h2>
        <Link to={USE_DISCLOSURE}>create useDisclosure Hook Day16 HW</Link>
      </h2>
      <h2>
        <Link to={USE_FORCE_UPDATE}>create useForceUpdate Hook Day16 HW</Link>
      </h2>
      <h2>
        <Link to={USE_TOGGLE_HOOK}>create useToggle Hook Day16 HW</Link>
      </h2>
      <h2>
        <Link to={LOGIN}>Login use useRef Day16 HW</Link>
      </h2>
      <h2>
        <Link to={FETCH_HOOK}>create fetch HOOK Day16 HW</Link>
      </h2>
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
        <Link to={SIMPLE_QUIZ_PROJECT}>To Simple Quiz Project</Link>
      </h2>
      <h2>
        <Link to={TODO_LIST}>To Do List</Link>
      </h2>
      <h2>
        <Link to={HW_NOTE}>To my note page</Link>
      </h2>
      <h2>
        <Link to={LIVE_CODING}> To Live Coding page</Link>
      </h2>
    </div>
  );
}

export default Home;
