import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LandingPage } from "pages/LandingPage";
import { ArtistForm } from "pages/ArtistForm";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { useCallback, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { NetworkTypes } from "types";
import Actions from "redux/actions";
import IndexNavbar from "components/Navbars/IndexNavbar";

export default function App() {
  const toastData = useSelector((state: RootState) => state.utils.toast);
  const [chainId, setChainId] = useState<string>("");
  const { Moralis, isAuthenticated, account, logout } = useMoralis();
  const dispatch = useDispatch();
  const newToast = useCallback(
    (payload) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );
  const updateChain = useCallback(
    (payload) => dispatch(Actions.WalletActions.UpdateChain(payload)),
    [dispatch]
  );
  const updateBalance = useCallback(
    (payload: string) => dispatch(Actions.AuthActions.Balance(payload)),
    [dispatch]
  );
  const updateNfts = useCallback(
    (payload: any) => dispatch(Actions.WalletActions.UpdateNfts(payload)),
    [dispatch]
  );
  const storeLogout = useCallback(
    () => dispatch(Actions.AuthActions.Logout()),
    [dispatch]
  );

  const userData = useSelector((state: RootState) => state.auth.user);

  //Initialize web3 env
  const setWeb3Env = () => {
    getNetwork();
    monitorNetwork();
    monitorDisconnection();
  };

  //Toast depending on chain being used
  const getNetwork = async () => {
    try {
      const chainID = await Moralis.getChainId();
      if (chainID) {
        setChainId(chainID);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //Reload on chain change
  const monitorNetwork = () => {
    Moralis.onChainChanged(function () {
      getNetwork();
    });
  };

  //Check if user disconnects from inside Metamask
  const monitorDisconnection = () => {
    Moralis.onAccountChanged(function () {
      logout();
      storeLogout();
    });
  };

  //Update stuff once web3 is enabled.
  const onWeb3Enabled = () => {
    Moralis.onWeb3Enabled(function () {
      setWeb3Env();
    });
  };

  // Initialize web3 through Moralis on load
  useEffect(() => {
    const enableWeb3 = async () => {
      await Moralis.enableWeb3();
    };
    enableWeb3();
    onWeb3Enabled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //If user authenticates, we set up the environment
  useEffect(() => {
    if (isAuthenticated) {
      onWeb3Enabled();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  //Update chain of change in wallet
  useEffect(() => {
    if (chainId.length && userData.balance && account) {
      //@ts-ignore
      const chainName = NetworkTypes[chainId];
      updateChain({
        name: chainName,
        id: chainId,
        balance: userData.balance,
        address: account,
      });
    }
  }, [chainId, updateChain, userData.balance, account]);

  //Trigger toast on chain id change
  useEffect(() => {
    if (isAuthenticated && chainId.length && chainId !== "0x1") {
      newToast({
        text: "Please switch to Mainnet",
        type: "warning",
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, isAuthenticated]);

  // Fetch address balance and NFTs on address change
  useEffect(() => {
    const getBalancesAndNfts = async () => {
      if (account) {
        try {
          const balances = await Moralis.Web3API.account.getNativeBalance({
            address: account,
            //@ts-ignore
            chain: chainId,
          });
          const nftList = await Moralis.Web3API.account.getNFTs({
            address: account,
            //@ts-ignore
            chain: chainId,
          });
          updateBalance(Moralis.Units.FromWei(balances.balance));
          updateNfts(nftList.result);
        } catch (e) {
          updateBalance("0");
        }
      }
    };
    if (account && chainId.length && isAuthenticated) {
      getBalancesAndNfts();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, isAuthenticated, chainId]);

  // Display toasts set in Redux
  useEffect(() => {
    if (toastData.text.length) {
      toast[toastData.type](toastData.text, {
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: true,
      });
    }
  }, [toastData]);

  return (
    <BrowserRouter>
      <IndexNavbar />
      <Switch>
        <Route
          path="/"
          exact
          render={(props: any) => <LandingPage {...props} />}
        />
        <Route
          path="/artist_form"
          render={(props: any) => <ArtistForm {...props} />}
          exact
        />
        <Redirect from="/" to="/components" />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}
