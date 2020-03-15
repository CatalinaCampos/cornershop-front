import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_COUNTER_REQUEST,
  GET_COUNTER_SUCCESS,
  GET_COUNTER_FAILURE
} from "../actions/counter";
import { Api } from "../services/api";

function* getCounters() {
  try {
    const getData = yield Api.get();
    yield put({ type: GET_COUNTER_SUCCESS, receivedData: getData });
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest(GET_COUNTER_REQUEST, getCounters);
}

export default mySaga;
