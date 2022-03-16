import { FlexView } from "components/UI_KIT/Display";
import { useSelector } from 'react-redux'
import { RootState } from "redux/reducers";

export const ProfilePage = () => {
  const nft = useSelector((state: RootState) => state.wallet.nfts[0]);
  return (
    <FlexView isTop>
      {/* <img src={nft.image.replace("ipfs://", "https://ipfs.io/")} alt="avatar" /> */}
    </FlexView>
  )
}
