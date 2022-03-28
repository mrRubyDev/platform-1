import CustomModal from "../UI_KIT/CustomModal";
import styled from "styled-components";
import AvatarDisplay from "../UI_KIT/Avatar";
import { Badge } from "reactstrap";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { ButtonTypes } from "types";
import { roundBalance } from "utils";
import { Link } from "react-router-dom";
import useCopyAddress from "utils/useCopyAddress";

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
  const copyAddress = useCopyAddress();
  const userBody = (
    <Container>
      <div style={{ height: "5rem", width: "20%" }}>
        <AvatarDisplay size={50} />
      </div>
      <Content>
        <div>
          <header>Address:</header>
          <p>{user?.accounts[0]}</p>
          <div>
            <Link to ="/profile" style = {{ color: 'white', textDecoration: 'none' }}>
          <Badge
            color="success"
            style={{ cursor: "pointer", marginRight: 5 }}
            onClick={onClose}
            >
            Profile
            </Badge>
            </Link>
          <Badge
            color="info"
            style={{ cursor: "pointer" }}
            onClick={copyAddress}
          >
              Copy Address
          </Badge>
            </div>
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
