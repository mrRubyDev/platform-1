import NFTCard from 'components/NftCard/nftCard.view';
import { INft } from 'types';

export default function NFTList({list, handleNFTModal}: { list: INft[], handleNFTModal: (nft: INft) => void }) {
  return (
    <div>
      {list.map((nft) => (
        <div style={{width: '16rem', height: '24rem'}}>
          <NFTCard nft={nft} onClick={() => handleNFTModal(nft)}/>
        </div>
      ))}
    </div>
  )
};
