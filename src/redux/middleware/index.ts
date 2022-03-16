import { all, call, takeEvery } from "redux-saga/effects";
// import Auth from "./auth.middleware";
import Utils from './utils.middleware';
import Wallet from './wallet.middleware';
import { IReduxAction } from "types";

function log({ type, payload }: IReduxAction) {
  console.log("ACTION", type, payload);
}

function* RootMiddleware() {
  yield all([
    takeEvery("*", log),
    call(Utils),
    call(Wallet),
  ]);
}

export default RootMiddleware;
