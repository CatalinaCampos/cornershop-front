export const GET_COUNTERS_REQUEST = "GET_COUNTERS_REQUEST";
export const GET_COUNTERS_SUCCESS = "GET_COUNTERS_SUCCESS";
export const GET_COUNTERS_FAILURE = "GET_COUNTERS_FAILURE";

export const getCountersData = data => ({ type: GET_COUNTERS_REQUEST, data });

export const ADD_COUNTER_REQUEST = "ADD_COUNTER_REQUEST";
export const ADD_COUNTER_SUCCESS = "ADD_COUNTER_SUCCESS";
export const ADD_COUNTER_FAILURE = "ADD_COUNTER_FAILURE";

export const addCounter = data => ({ type: ADD_COUNTER_REQUEST, data });

export const INCREMENT_COUNTER_REQUEST = "INCREMENT_COUNTER_REQUEST";
export const INCREMENT_COUNTER_SUCCESS = "INCREMENT_COUNTER_SUCCESS";
export const INCREMENT_COUNTER_FAILURE = "INCREMENT_COUNTER_FAILURE";

export const incCounter = data => ({ type: INCREMENT_COUNTER_REQUEST, data });

export const DECREMENT_COUNTER_REQUEST = "DECREMENT_COUNTER_REQUEST";
export const DECREMENT_COUNTER_SUCCESS = "DECREMENT_COUNTER_SUCCESS";
export const DECREMENT_COUNTER_FAILURE = "DECREMENT_COUNTER_FAILURE";

export const decCounter = data => ({ type: DECREMENT_COUNTER_REQUEST, data });

export const DELETE_COUNTER_REQUEST = "DELETE_COUNTER_REQUEST";
export const DELETE_COUNTER_SUCCESS = "DELETE_COUNTER_SUCCESS";
export const DELETE_COUNTER_FAILURE = "DELETE_COUNTER_FAILURE";

export const deleteCounter = data => ({ type: DELETE_COUNTER_REQUEST, data });

export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

export const setSearchText = text => ({ type: SET_SEARCH_TEXT, text });

export const GET_COUNTERS_DATA_FILTERED = "GET_COUNTERS_DATA_FILTERED";

export const getCountersDataFiltered = text => ({
  type: GET_COUNTERS_DATA_FILTERED,
  text
});
