import { put, takeLatest } from "redux-saga/effects";
import {
  GET_COUNTERS_REQUEST,
  GET_COUNTERS_SUCCESS,
  GET_COUNTERS_FAILURE
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

function* mySaga() {
  yield takeLatest(GET_COUNTERS_REQUEST, getCounters);
}

export default mySaga;
