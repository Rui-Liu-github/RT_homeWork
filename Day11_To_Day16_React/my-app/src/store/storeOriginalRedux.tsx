import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import todoReduxReducer from "../pages/Day17_18homework/TodoReduxOriginal";

// const storeOriginal = createStore(todoReduxReducer, applyMiddleware(thunk));

// export type RootState = ReturnType<typeof storeOriginal.getState>;
// export default storeOriginal;
