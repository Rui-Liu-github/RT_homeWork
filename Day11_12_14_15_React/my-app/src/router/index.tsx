import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HwOne from "../pages/Hw1_UI";
import DemoNoteOne from "../pages/video_notes/Note1";
import NotFound from "../pages/NotFound";
import LiveCodeOne from "../pages/LiveCoding";
import DisplayCheckBox from "../pages/Day14_15_homework/DisplayForm";
import ShopingCart from "../pages/Day14_15_homework/ShopingCart";
import TicTac from "../pages/Day14_15_homework/Tic_Tac";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "/button_hw_11",
        element: <HwOne />,
      },
      {
        path: "/noteOne",
        element: <DemoNoteOne />,
      },
      {
        path: "/liveCode_dayOne",
        element: <LiveCodeOne />,
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
export const LC_One = "/liveCode_dayOne";
export const HW_DAY_11 = "./button_hw_11";
export const TIC_TAC = "/tic_tac_hw_14";
export const FORM_CHECKBOX_14 = "/form_hw_14";
export const SHOPPING_CART = "/shoping_cart_hw_14";
