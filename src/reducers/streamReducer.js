import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      console.log("in action reducer");
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return __dirname.omit(state, action.payload);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
