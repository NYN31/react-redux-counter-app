import { createStore } from "redux";
import CounterReducer from "./services/reducers/CounterReducers";

const store = createStore(CounterReducer);
export default store;
