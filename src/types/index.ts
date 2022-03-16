export enum ProviderTypes {
  metamask = "metamask",
  walletConnect = "walletConnect",
}

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  info = "info",
  danger = "danger",
  link = "link",
}

export enum ToastTypes {
  success = "success",
  error = "error",
  warn = "warn",
  info = "info",
}

export const NetworkTypes = {
  "0x1": "Mainnet",
  "0x3": "Ropsten",
  "0x4": "Rinkeby",
  "0x2a": "Kovan",
  "0x5": "Goerli",
};

export interface IUser {
  username: string;
  authData: any;
  createdAt: string;
  updatedAt: string;
  accounts: string[];
  ethAddress: string;
  sessionToken: string;
  objectId: string;
  balance: any;
}
export interface IWallet {
  name: string;
  balance: string;
  address: string;
  id: string;
}

export interface IArtist {
  name: string;
  email: string;
  bio: string;
  twitter_url: string;
  instagram_url?: string;
  website?: string;
}

//Redux types
export interface IReduxAction {
  type: string;
  payload?: any;
}

export interface INftFetch {
  token_address: string;
  token_id: string;
  token_name: string;
  block_number_minted: string;
  owner_of: string;
  block_number: string;
  amount: string;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri: string;
  metadata: any;
  synced_at: string;
  is_valid: number;
  syncing: number;
  frozen: number;
}

export interface INft extends INftFetch { 
  name: string;
  description: string;
  image: any;
  attributes: any;
}