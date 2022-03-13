import { FlexView } from "components/UI_KIT/Display";
import { useSelector } from 'react-redux'
import { RootState } from "redux/reducers";

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <FlexView isTop>ProfilePage</FlexView>
  )
}
