import {
  GET_COUNTERS_REQUEST,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS_FAILURE,
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
    getDataLoader: false,
    addCounter: false,
    counterLoad: false,
    incCounter: false,
    decCounter: false
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
    case ADD_COUNTER_REQUEST:
      return {
        ...state,
        isLoading: {
          addCounter: true
        }
      };
    case ADD_COUNTER_SUCCESS:
      return {
        ...state,
        isLoading: {
          addCounter: false
        }
      };
    case ADD_COUNTER_FAILURE:
      return {
        ...state,
        isLoading: {
          addCounter: false
        }
      };
    case INCREMENT_COUNTER_REQUEST:
      console.log("reducer add");
      return {
        ...state,
        isLoading: {
          incCounter: true
        }
      };
    case INCREMENT_COUNTER_SUCCESS:
      return {
        ...state,
        isLoading: {
          incCounter: false
        }
      };
    case INCREMENT_COUNTER_FAILURE:
      return {
        ...state,
        isLoading: {
          incCounter: false
        }
      };
    case DECREMENT_COUNTER_REQUEST:
      console.log("reducer add");
      return {
        ...state,
        isLoading: {
          decCounter: true
        }
      };
    case DECREMENT_COUNTER_SUCCESS:
      return {
        ...state,
        isLoading: {
          decCounter: false
        }
      };
    case DECREMENT_COUNTER_FAILURE:
      return {
        ...state,
        isLoading: {
          decCounter: false
        }
      };
    default:
      return state;
  }
};

export default reducer;
