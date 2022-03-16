import { put, takeEvery } from "redux-saga/effects";
import Actions from "../actions";
import { IReduxAction } from "../../types";

// //Setting this up only so it doesn't bother me with middlewares
// function* login(action: IReduxAction) {
//   try {
//     yield put(Actions.AuthActions.Login.success(action.payload));
//   } catch (error: any) {
//     if (error.message) {
//       yield put(Actions.AuthActions.Login.failed("errors.auth.login" as any));
//     }
//   }
// }

// export default function* authMiddleware() {
//   yield takeEvery(Actions.AuthActions.LOGIN.REQUEST, login);
// }
