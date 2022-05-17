import NFTCard from 'components/NftCard/nftCard.view';
import { INft } from 'types';
import styled from 'styled-components';

export default function NFTList({list, handleNFTModal}: { list: INft[], handleNFTModal: (nft: INft) => void }) {
  const emptySpaces = list.length % 3;
  return (
    <Container>
      {list.map((nft, i) => (
        <div key = {i} style={{width: '16rem', height: '24rem'}}>
          <NFTCard nft={nft} onClick={() => handleNFTModal(nft)}/>
        </div>
      ))}
      {[...Array(emptySpaces)].map(() => <div style={{width: '16rem', height: '24rem'}}/>)}
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  flex-grow: 1;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: center;
  }
`
const NftContainer = styled.div`
  display: flex;
  width: 16rem;
  height: 24rem;
  @media (max-width: 768px) {
    margin-right: 1rem;
    width: 60%;
  }
`