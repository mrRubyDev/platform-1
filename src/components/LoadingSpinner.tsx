import { Oval } from "react-loader-spinner";
import styled from "styled-components";

export default function LoadingSpinner() {
  return (
    <LoadingContainer>
      <Oval
        color="white"
        height={110}
        width={110}
        ariaLabel="three-circles-rotating"
      />
  </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
