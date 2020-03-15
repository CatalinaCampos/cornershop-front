import { put, takeLatest } from "redux-saga/effects";
import {
  GET_COUNTERS_REQUEST,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS_FAILURE,
  ADD_COUNTER_REQUEST,
  ADD_COUNTER_SUCCESS,
  ADD_COUNTER_FAILURE
} from "../actions/counter";
import { Api } from "../services/api";

function* getCounters() {
  try {
    // console.log("sagas working");
    const getData = yield Api.get("/counters");
    yield put({ type: GET_COUNTERS_SUCCESS, result: getData });
    // console.log("sagas", getData);
  } catch (e) {
    yield put({ type: GET_COUNTERS_FAILURE });
  }
}

function* addCounter() {
  try {
    const getData = yield Api.post("/counter");
    yield put({ type: ADD_COUNTER_SUCCESS, result: getData });
  } catch (e) {
    yield put({ type: ADD_COUNTER_FAILURE });
  }
}

function* mySaga() {
  yield takeLatest(GET_COUNTERS_REQUEST, getCounters);
  yield takeLatest(ADD_COUNTER_REQUEST, addCounter);
}

export default mySaga;
