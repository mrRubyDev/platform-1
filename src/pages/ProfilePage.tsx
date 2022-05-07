import AvatarDisplay from "components/UI_KIT/Avatar";
import { FlexView } from "components/UI_KIT/Display";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Badge } from "reactstrap";
import { RootState } from "redux/reducers";
import styled from "styled-components";
import { INft } from "types";
import useCopyAddress from "utils/useCopyAddress";
import CustomModal from "components/UI_KIT/CustomModal";
import NFTList from "components/ProfilePage/NFTList";
import Staking from "components/ProfilePage/Staking";
import Tokens from "components/ProfilePage/Tokens";
import { useNavigate } from "react-router-dom";

interface ITab { 
  name: string;
  id: number;
}

const tabs: ITab[] = [
  {name: "Collectibles", id: 0 },
  {name: "Staking", id: 1 },
  {name: "Tokens", id: 2 },
  {name: "Governance", id: 3 },
]

export const ProfilePage = () => {
  const nfts = useSelector((state: RootState) => state.wallet.nfts);
  const address = useSelector((state: RootState) => state.wallet.wallet.address);
  const copyAdress = useCopyAddress();
  const navigate = useNavigate()
  const [nftModalOpen, setNftModalOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState<ITab>(tabs[0]);
  const [selectedNft, setSelectedNft] = useState<INft>();

  useEffect(() => {
    if (!address) navigate("/")
  },[address, navigate])

  const handleNFTModal = (nft: INft) => {
    setNftModalOpen(true);
    setSelectedNft(nft);
  };

  const TabContent = () => {
    switch (selectedTab.id) {
      case 0: 
        return <NFTList list={nfts} handleNFTModal={handleNFTModal}/>;
      case 1: 
        return <Staking />;
      case 2: 
        return <Tokens />;
      default: 
        return null;
    }
  };


  return (
    <FlexView>
      <Container>
        <Header>
          <AvatarDisplay size={'6vw'} />
          <HeaderData>
            <div style = {{ height: '50%' }}>
              <h2 style= {{marginBottom: 1, fontWeight: 700}}>Your Account</h2>
            </div>
            {address && (
            <AddressInfo>
              <p style={{fontSize: '1.2rem', textOverflow:'ellipsis', whiteSpace: 'nowrap', overflow:'hidden', maxWidth: '80vw' }}>{address}</p>
              <Badges>
                <Badge
                  color="info"
                  style={{ cursor: "pointer"}}
                  onClick={copyAdress}
                >
                  Copy
                </Badge>
                <Badge
                  color="secondary"
                  style={{ cursor: "pointer", marginLeft: '1rem'}}
                  onClick={()=> window.open(`https://etherscan.io/address/${address}`, "_blank")}
                >
                  View on Etherscan
                </Badge>
              </Badges>
            </AddressInfo>
            )}
          </HeaderData>
        </Header>
        <ContentContainer>
          <Tabs>
            {tabs.map(el => (
              <Tab key={el.id} isSelected={selectedTab.name === el.name} onClick={() => setSelectedTab(el)}>
                <h4 style={{margin: 0}}>
                  {el.name}
                </h4>
              </Tab>
            ))}
          </Tabs>
          <Content>
            {TabContent()}
          </Content>
        </ContentContainer>
      </Container>
      <CustomModal isOpen={nftModalOpen} onClose={() => setNftModalOpen(false)} header={selectedNft?.name} body={
        <Modal>
        </Modal>
      }/>
    </FlexView>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 90vw;
`

const Header = styled.div`
  display: flex;
`
const HeaderData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`
const Badges = styled.div`
  display: flex;
  margin-left: 1rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  min-height: 40vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 1rem;
  margin-top: 1rem;
  width: 80%;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const AddressInfo = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`

const Tab = styled.div<{isSelected: boolean}>`
  height: 3rem;
  margin-top: 1rem;
  display: flex;
  width: 100%;
  padding: .5rem;
  align-items: center;
  border-radius: 1px;
  background-color: ${props => props.isSelected ? '#131435' : ''};
  border-bottom: ${props => props.isSelected ? '0.5px solid #4824fa' : 'none'};
  &:hover {
    background-color: #4824FA;
    cursor: pointer;
  }
  &:active {
    background-color: black;
  }
  @media (max-width: 768px) {
    width: 25%;
    height: 3rem;
    justify-content: center;
    align-items: center;
  }
`;

const Tabs = styled.div`
  min-height: 60vh;
  width: 20%;
  border-right: solid 0.2px white;
  padding-right: 1rem;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    min-height: 3rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-right: 0px;
    border-bottom: solid 0.2px white;
    padding-right: 0px;
    padding-bottom: 1rem;
    margin-top: 0;
  }
`

const Modal = styled.div`
  width: 40%;
  height: 40%;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`