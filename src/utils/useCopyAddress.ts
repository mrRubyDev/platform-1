import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "redux/actions";
import { RootState } from "redux/reducers";

export default function useCopyAddress() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const addToast = useCallback(
    (payload) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );

  return function copyAddress() {
    navigator.clipboard.writeText(user?.accounts[0]);
    addToast({ text: "Address copied to clipboard!" });
  };
}
