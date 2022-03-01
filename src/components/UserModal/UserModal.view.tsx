import CustomModal from "../UI_KIT/CustomModal";
import styled from "styled-components";
import AvatarDisplay from "../UI_KIT/Avatar";
import { Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import Actions from "redux/actions";
import { useCallback } from "react";
import { ButtonTypes } from "types";
import { roundBalance } from "utils";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function UserModal({
  isOpen,
  onClose,
  onLogout,
}: UserModalProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const addToast = useCallback(
    (payload) => dispatch(Actions.UtilsActions.AddToast(payload)),
    [dispatch]
  );

  const copyAddress = () => {
    navigator.clipboard.writeText(user?.accounts[0]);
    addToast({ text: "Address copied to clipboard!" });
  };

  const userBody = (
    <Container>
      <div style={{ height: "5rem", width: "20%" }}>
        <AvatarDisplay size={50} />
      </div>
      <Content>
        <div>
          <header>Address:</header>
          <p>{user?.accounts[0]}</p>
          <Badge
            color="info"
            style={{ cursor: "pointer" }}
            onClick={copyAddress}
          >
            Copy Address
          </Badge>
          <header>Balance:</header>
          <p>{roundBalance(user?.balance, 6)} ETH</p>
        </div>
        <LogoutContainer>
          <Badge
            onClick={onLogout}
            color={ButtonTypes.danger}
            style={{ width: "25%", justifySelf: "flex-end", cursor: "pointer" }}
          >
            Disconnect
          </Badge>
        </LogoutContainer>
      </Content>
    </Container>
  );
  return user?.accounts?.length ? (
    <CustomModal
      header="Account"
      body={userBody}
      isOpen={isOpen}
      onClose={onClose}
    />
  ) : null;
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  height: 10rem;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  justify-self: flex-end;
`;