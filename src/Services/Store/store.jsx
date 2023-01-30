import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { toDosReducer } from "../Reducer/ToDosReducer";

export const store = createStore(toDosReducer, applyMiddleware(thunk));
