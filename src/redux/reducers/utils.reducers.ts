import Actions from "../actions";
import { IReduxAction, ToastTypes } from "types";

export interface IUtilsState {
  toast: {
    text: string;
    type: ToastTypes;
    time: number;
  };
}

const initialState = {
  toast: {
    text: "",
    type: ToastTypes.success,
    time: 3000,
  },
};

const GlobalReducers = (
  state: IUtilsState = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case Actions.UtilsActions.NEW_TOAST:
      return {
        ...state,
        toast: {
          text: payload.text,
          type: payload.type || ToastTypes.success,
          time: payload.time || 3000,
        },
      };
    case Actions.UtilsActions.CLEAR_TOAST:
      return {
        ...state,
        toast: {
          text: "",
          type: ToastTypes.success,
          time: 3000,
        },
      };
    default:
      return state;
  }
};

export default GlobalReducers;
