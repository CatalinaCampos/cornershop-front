import { put, takeLatest } from "redux-saga/effects";
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
import { Api } from "../services/api";

function* getCounters() {
  try {
    const getData = yield Api.get("/counters");
    yield put({ type: GET_COUNTERS_SUCCESS, result: getData });
  } catch (e) {
    yield put({ type: GET_COUNTERS_FAILURE });
  }
}

function* addCounter(params) {
  try {
    const getData = yield Api.post("/counter", { title: params.data });
    console.log(params);
    yield put({ type: ADD_COUNTER_SUCCESS, result: getData });
  } catch (e) {
    yield put({ type: ADD_COUNTER_FAILURE });
  }
}

function* incCounter(params) {
  try {
    const getData = yield Api.post("/counter/inc", { id: params.data });
    console.log(getData);
    yield put({ type: INCREMENT_COUNTER_SUCCESS, result: getData });
  } catch (e) {
    yield put({ type: INCREMENT_COUNTER_FAILURE });
    console.log(e);
  }
}

function* decCounter(params) {
  try {
    const getData = yield Api.post("/counter/dec", { id: params.data });
    yield put({ type: DECREMENT_COUNTER_SUCCESS, result: getData });
  } catch (e) {
    yield put({ type: DECREMENT_COUNTER_FAILURE });
  }
}

// function* deleteCounter(params) {
//   try {
//     const getData = yield Api.deleteApi(`/counter`);
//     console.log(params);
//     yield put({ type: DELETE_COUNTER_SUCCESS, result: getData });
//   } catch (e) {
//     yield put({ type: DELETE_COUNTER_FAILURE });
//   }
// }

function* mySaga() {
  yield takeLatest(GET_COUNTERS_REQUEST, getCounters);
  yield takeLatest(ADD_COUNTER_REQUEST, addCounter);
  yield takeLatest(INCREMENT_COUNTER_REQUEST, incCounter);
  yield takeLatest(DECREMENT_COUNTER_REQUEST, decCounter);
  // yield takeLatest(DELETE_COUNTER_REQUEST, deleteCounter);
}

export default mySaga;
