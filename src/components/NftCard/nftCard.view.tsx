import LoadingSpinner from "components/LoadingSpinner";
import styled from "styled-components";
import { INft } from "types";
import Tilt from 'react-parallax-tilt';

export default function NFTCard({nft, onClick}: {nft: INft, onClick: (nft: INft) => void}) {
  const isLoading = nft?.image.content.length;
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionEasing={'cubic-bezier(0.2,.98,.52,.99)'}>
      <Card onClick={() => onClick(nft)}>
        {isLoading ? (
          <>
            <Image src={nft.image.content} alt={nft.name} />
            <Content>
              <Title>{nft.name}</Title>
              <DescriptionText>by {nft.description}</DescriptionText>
            </Content>
          </>
        ) : (
          <LoadingSpinner/>
        )}
      </Card>
    </Tilt>
  )
}

const Card = styled.div`
  position: relative;
  background: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: .2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background-position: center center;
  box-shadow: inset 0 0 1rem 0 rgba(0, 0, 0, .2);
  transition: box-shadow 0.5s;
  border: white solid 1px;
  will-change: transform;
  padding: 1rem 0;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    box-shadow: inset 0 0 50px 0 rgba(255, 255, 255, .2);
    filter: blur(5px);
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
  text-overflow: ellipsis;
  overflow: hidden;
`

const DescriptionText = styled.p`
  font-size: 1rem;
  margin: 0;
`