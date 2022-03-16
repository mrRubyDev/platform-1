import { put, takeEvery } from "redux-saga/effects";
import Actions from "../actions";
// import { IReduxAction } from "../../types";

function newToast() {
  setTimeout(() => put(Actions.UtilsActions.ClearToast()),3000);
}

export default function* utilsMiddleware() {
  yield takeEvery(Actions.UtilsActions.NEW_TOAST, newToast);
}
