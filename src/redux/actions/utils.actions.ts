import { ToastTypes } from "types";

export const NEW_TOAST = "@utils/new_toast";
export const CLEAR_TOAST = "@utils/clear_toast";

export const AddToast = (payload: { text: string; type?: ToastTypes, time?: number }) => ({
  type: NEW_TOAST,
  payload,
});
export const ClearToast = () => ({ type: CLEAR_TOAST });
