import {
  GET_COUNTERS_REQUEST,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS_FAILURE
  // ADD_COUNTER_REQUEST,
  // ADD_COUNTER_SUCCESS,
  // ADD_COUNTER_FAILURE,
  // INCREMENT_COUNTER_REQUEST,
  // INCREMENT_COUNTER_SUCCESS,
  // INCREMENT_COUNTER_FAILURE,
  // DECREMENT_COUNTER_REQUEST,
  // DECREMENT_COUNTER_SUCCESS,
  // DECREMENT_COUNTER_FAILURE,
  // DELETE_COUNTER_REQUEST,
  // DELETE_COUNTER_SUCCESS,
  // DELETE_COUNTER_FAILURE
} from "../actions/counter";

const initialState = {
  isLoading: {
    getDataLoader: false,
    counterLoad: false
  },
  counters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTERS_REQUEST:
      return {
        ...state,
        isLoading: {
          getDataLoader: true
        }
      };
    case GET_COUNTERS_SUCCESS:
      console.log(action);
      console.log("reducer working");
      return {
        ...state,
        isLoading: {
          getDataLoader: false
        },
        counters: action.result
      };
    case GET_COUNTERS_FAILURE:
      return {
        ...state,
        isLoading: {
          getDataLoader: false
        }
      };
    default:
      return state;
  }
};

export default reducer;
