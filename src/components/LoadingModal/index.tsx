import { ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";

export default function LoadingModal() {
    return (
      <Container>
        <ThreeCircles
          color="white"
          height={110}
          width={110}
          ariaLabel="three-circles-rotating"
            />
        </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  `;
