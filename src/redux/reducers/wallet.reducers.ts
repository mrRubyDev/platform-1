import Actions from "../actions";
import { ApiReducerState, apiReducerInitialState } from "./reducerUtils";
import { INft, IReduxAction, IWallet } from "types";

export interface IWalletState extends ApiReducerState {
  wallet: IWallet;
  nfts: INft[];
}

const initialState = {
  ...apiReducerInitialState,
  wallet: {
    name: "",
    address: "",
    balance: "",
    id: "",
  },
  nfts: [],
};

const WalletReducer = (
  state: IWalletState = initialState,
  { type, payload }: IReduxAction
) => {
  switch (type) {
    case Actions.WalletActions.UPDATE_CHAIN:
      return {
        ...state,
        wallet: payload,
      };
    case Actions.WalletActions.UPDATE_NFTS.SUCCESS:
      return {
        ...state,
        nfts: payload,
      }
    case Actions.WalletActions.UPDATE_NFTS.FAILED:
      return {
        ...state,
        failed: true,
      }
    case Actions.AuthActions.LOGOUT:
      console.log("This case")
      return {
        ...initialState,
      }
    default:
      return state;
  }
};

export default WalletReducer;
