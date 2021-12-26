import {
  ButtonContainer,
  ButtonH3,
  ButtonWrapper,
  MenuContainer,
} from "./LeftNavigationComponents";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useContext } from "react";
import PortalContext from "../../../../Context/UserManagement/PortalContext";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
const LeftNavigation = () => {
  const [showComponents, setShowComponent] = useContext(PortalContext);
  return (
    <MenuContainer>
      <ButtonContainer>
        <Button
          variant="text"
          style={{ width: "100%" }}
          onClick={() => {
            setShowComponent({
              ...showComponents,
              showProperties: false,
              showRentalIncome: false,
              showUserAccount: true,
            });
          }}
        >
          <ButtonWrapper>
            <AccountBoxIcon style={{ color: "#d5992f" }} />

            <ButtonH3 color="#d5992f ">Home</ButtonH3>
          </ButtonWrapper>
        </Button>

        <Button
          variant="text"
          style={{ width: "100%" }}
          onClick={() => {
            setShowComponent({
              ...showComponents,
              showProperties: false,
              showRentalIncome: true,
              showUserAccount: false,
            });
          }}
        >
          <ButtonWrapper>
            <OtherHousesIcon style={{ color: "#d5992f" }} />

            <ButtonH3 color="#d5992f ">My Rental Income</ButtonH3>
          </ButtonWrapper>
        </Button>

        <Button
          variant="text"
          style={{ width: "100%" }}
          onClick={() => {
            setShowComponent({
              ...showComponents,
              showProperties: true,
              showRentalIncome: false,
              showUserAccount: false,
            });
          }}
        >
          <ButtonWrapper>
            <HomeIcon style={{ color: "#d5992f" }} />

            <ButtonH3 color="#d5992f ">My Properties</ButtonH3>
          </ButtonWrapper>
        </Button>

        <Button variant="text" style={{ width: "100%" }}>
          <ButtonWrapper>
            <LogoutIcon style={{ color: "#d5992f" }} />

            <ButtonH3 color="#d5992f ">Log out</ButtonH3>
          </ButtonWrapper>
        </Button>
      </ButtonContainer>
    </MenuContainer>
  );
};
export default LeftNavigation;
