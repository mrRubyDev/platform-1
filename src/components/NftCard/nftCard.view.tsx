import LoadingSpinner from "components/LoadingSpinner";
import styled from "styled-components";
import { INft } from "types";

export default function NFTCard({nft, onClick}: {nft: INft, onClick: (nft: INft) => void}) {
  const isLoading = nft?.image.content.length;

  return (
    <div data-tilt>
      <Card onClick={() => onClick(nft)}>
        {isLoading ? (
          <>
            <Image src={nft.image.content} alt={nft.name} />
            <Content>
              <Title>{nft.name}</Title>
              <DescriptionText>{nft.description}</DescriptionText>
            </Content>
          </>
        ) : (
          <LoadingSpinner/>
        )}
      </Card>
    </div>
  )
}

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-color: white;
  border-radius: .2rem;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: contain;
`
const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 5% 1rem;
`

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
`

const DescriptionText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: black;
`