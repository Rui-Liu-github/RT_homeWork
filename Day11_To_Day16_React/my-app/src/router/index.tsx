import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HwOne from "../pages/Hw1_UI";
import DemoNoteOne from "../pages/video_notes/Note1";
import NotFound from "../pages/NotFound";
import SimpleQuizProject from "../pages/SimpleQuizProject";
import DisplayCheckBox from "../pages/Day14_15_homework/DisplayForm";
import ShopingCart from "../pages/Day14_15_homework/ShopingCart";
import TicTac from "../pages/Day14_15_homework/Tic_Tac";
import Home from "../pages/Home";
import TodoListApp from "../pages/day12_interactivity/TodoListApp";
import LiveCoding from "../pages/LiveCoding";
import LoginUseRef from "../pages/Day16_homework/Login_useRef";
import CreateUseFetchHook from "../pages/Day16_homework/Create_useFetch_Hook";
import CreateUseDisclosureHook from "../pages/Day16_homework/CustomHooks_HW/useDisclosure";
import CreateUseForceUpdateHook from "../pages/Day16_homework/CustomHooks_HW/useForceUpdate";
import CreateUseIDHook from "../pages/Day16_homework/CustomHooks_HW/useID";
import CreateUseToggleHook from "../pages/Day16_homework/CustomHooks_HW/useToggle";
import CreateUseIdHook from "../pages/Day16_homework/CustomHooks_HW/useID";
import CreateUseDebounceHook from "../pages/Day16_homework/CustomHooks_HW/useDebounce";

import TodoListUseReducer from "../pages/Day17_18homework/Reducer&Context/TodoList_Reducer";
import TodoListRedux from "../pages/Day17_18homework/TodoList_Redux";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // useReducer & redux &context
      {
        path: "/todoList_useReducer",
        element: <TodoListUseReducer />,
      },
      {
        path: "/todoList_Redux",
        element: <TodoListRedux />,
      },
      //useRef hook
      {
        path: "/login_page",
        element: <LoginUseRef />,
      },
      // custom hooks
      {
        path: "/useBounce_hook",
        element: <CreateUseDebounceHook />,
      },
      {
        path: "/fetch_useFetch_hook",
        element: <CreateUseFetchHook />,
      },
      {
        path: "/create_useDisclosure_hook",
        element: <CreateUseDisclosureHook />,
      },
      {
        path: "/create_useForceUpdate_hook",
        element: <CreateUseForceUpdateHook />,
      },
      {
        path: "/create_useId_hook",
        element: <CreateUseIdHook />,
      },
      {
        path: "/create_useID_hook",
        element: <CreateUseIDHook />,
      },
      {
        path: "/create_useToggle_hook",
        element: <CreateUseToggleHook />,
      },

      // exercise
      {
        path: "/shoping_cart_hw_14",
        element: <ShopingCart />,
      },
      {
        path: "/form_hw_14",
        element: <DisplayCheckBox />,
      },
      {
        path: "/tic_tac_hw_14",
        element: <TicTac />,
      },
      {
        path: "/to_do_list",
        element: <TodoListApp />,
      },

      {
        path: "/button_hw_11",
        element: <HwOne />,
      },
      {
        path: "/noteOne",
        element: <DemoNoteOne />,
      },
      {
        path: "/simple_quiz_project",
        element: <SimpleQuizProject />,
      },
      {
        path: "/live_coding",
        element: <LiveCoding />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

export const HOME_PATHNAME = "/";
export const HW_NOTE = "/noteOne";
export const SIMPLE_QUIZ_PROJECT = "/simple_quiz_project";
export const HW_DAY_11 = "/button_hw_11";
export const TIC_TAC = "/tic_tac_hw_14";
export const FORM_CHECKBOX_14 = "/form_hw_14";
export const SHOPPING_CART = "/shoping_cart_hw_14";
export const TODO_LIST = "/to_do_list";
export const LIVE_CODING = "/live_coding";
export const LOGIN = "/login_page";
export const FETCH_HOOK = "/fetch_useFetch_hook";

export const USE_DISCLOSURE = "/create_useDisclosure_hook";
export const USE_FORCE_UPDATE = "/create_useForceUpdate_hook";
export const USE_TOGGLE_HOOK = "/create_useToggle_hook";
export const USE_ID_HOOK = "/create_useId_hook";
export const USE_DEBOUNCE_HOOK = "/useBounce_hook";

export const TODO_LIST_REDUCER = "/todoList_useReducer";
export const TODO_LIST_REDUX = "/todoList_Redux";
