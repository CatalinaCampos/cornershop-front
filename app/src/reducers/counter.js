import {
  GET_COUNTER_REQUEST,
  GET_COUNTER_SUCCESS,
  GET_COUNTER_FAILURE,
  ADD_COUNTER_REQUEST,
  ADD_COUNTER_SUCCESS,
  ADD_COUNTER_FAILURE,
  INCREMENT_COUNTER_REQUEST,
  INCREMENT_COUNTER_SUCCESS,
  INCREMENT_COUNTER_FAILURE,
  DECREMENT_COUNTER_REQUEST,
  DECREMENT_COUNTER_SUCCESS,
  DECREMENT_COUNTER_FAILURE,
  DELETE_COUNTER_REQUEST,
  DELETE_COUNTER_SUCCESS,
  DELETE_COUNTER_FAILURE
} from "../actions/counter";

const initialState = {
  isLoading: {
    addLoad: false,
    counterLoad: false
  },
  counters: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER_REQUEST:
      return {
        ...state,
        isLoading: {
          addLoad: true
        }
      };
    case ADD_COUNTER_SUCCESS:
      return {
        ...state,
        isLoading: {
          addLoad: false
        }
      };
    case ADD_COUNTER_FAILURE:
      return {
        ...state,
        isLoading: {
          addLoad: false
        }
      };
    default:
      return state;
  }
};

export default reducer;
