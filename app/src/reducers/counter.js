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
  DELETE_COUNTER_FAILURE,
  SET_SEARCH_TEXT,
  GET_COUNTERS_DATA_FILTERED,
  TOGGLE_SORT_COUNTERS_BY_TITLE,
  TOGGLE_SORT_COUNTERS_BY_AMOUNT,
  TOGGLE_FILTER_NUMBER_SYMBOL,
  FILTER_NUMBER
} from "../actions/counter";

const initialState = {
  isLoading: {
    getDataLoader: false,
    addCounter: false,
    counterLoad: false,
    incCounter: false,
    decCounter: false,
    deleteCounter: false
  },
  counters: [],
  countersFiltered: [],
  search: "",
  sortByTitle: "",
  sortByAmount: "",
  filterNumberSymbol: ">"
};

const filteredCounters = state => {
  return state.counters.filter(
    counter => counter.title.toLowerCase().indexOf(state.search) > -1
  );
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
        counters: action.result,
        countersFiltered: action.result
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
    case DELETE_COUNTER_REQUEST:
      return {
        ...state,
        isLoading: {
          deleteCounter: true
        }
      };
    case DELETE_COUNTER_SUCCESS:
      return {
        ...state,
        isLoading: {
          deleteCounter: false
        }
      };
    case DELETE_COUNTER_FAILURE:
      return {
        ...state,
        isLoading: {
          deleteCounter: false
        }
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        search: action.text
      };
    case GET_COUNTERS_DATA_FILTERED:
      return {
        ...state,
        countersFiltered: filteredCounters(state)
      };
    case TOGGLE_SORT_COUNTERS_BY_TITLE:
      const sortTitle =
        state.sortByTitle === ""
          ? "asc"
          : state.sortByTitle === "asc"
          ? "desc"
          : "";
      return {
        ...state,
        sortByTitle: sortTitle,
        countersFiltered:
          sortTitle === ""
            ? filteredCounters(state)
            : state.countersFiltered
                .slice()
                .sort((a, b) =>
                  sortTitle === "asc"
                    ? a.title < b.title
                      ? -1
                      : Number(a.title > b.title)
                    : a.title > b.title
                    ? -1
                    : Number(a.title < b.title)
                )
      };
    case TOGGLE_SORT_COUNTERS_BY_AMOUNT:
      const sortAmount =
        state.sortByAmount === ""
          ? "asc"
          : state.sortByAmount === "asc"
          ? "desc"
          : "";
      return {
        ...state,
        sortByAmount: sortAmount,
        countersFiltered:
          sortAmount === ""
            ? filteredCounters(state)
            : state.countersFiltered.slice().sort((a, b) => {
                return sortAmount === "asc"
                  ? a.count - b.count
                  : b.count - a.count;
              })
      };
    case TOGGLE_FILTER_NUMBER_SYMBOL:
      return {
        ...state,
        filterNumberSymbol: state.filterNumberSymbol === ">" ? "<" : ">"
      };
    case FILTER_NUMBER:
      return {
        ...state,
        countersFiltered:
          action.num.length === 0
            ? state.counters
            : state.counters.slice().filter(counter => {
                if (
                  eval(counter.count + state.filterNumberSymbol + action.num)
                ) {
                  return counter;
                }
              })
      };
    default:
      return state;
  }
};

export default reducer;
