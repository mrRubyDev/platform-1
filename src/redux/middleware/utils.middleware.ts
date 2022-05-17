import { call, put, takeEvery } from "redux-saga/effects";
import Actions from "../actions";
// import { IReduxAction } from "../../types";

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

function* newToast() {
  yield call(delay, 3000);
  yield put(Actions.UtilsActions.ClearToast())
}

export default function* utilsMiddleware() {
  yield takeEvery(Actions.UtilsActions.NEW_TOAST, newToast);
}
