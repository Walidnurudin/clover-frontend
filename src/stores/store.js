import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import PromiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer";

export default createStore(rootReducer, applyMiddleware(PromiseMiddleware, logger));
