import { combineReducers } from "redux";

import authReducer from "./authReducer";
import { streamReaducer } from "./streamReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReaducer
});
