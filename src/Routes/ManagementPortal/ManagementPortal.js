import LeftNavigation from "./StyledComponents/LeftNavigation/LeftNavigation";
import { Container, Wrapper } from "./StyledComponents/ManagementPortal";
import Properties from "./StyledComponents/Properties/Properties";
import RentalIncome from "./StyledComponents/RentalIncome/RentalIncome";
import { useContext } from "react";
import PortalContext from "../../Context/UserManagement/PortalContext";
import UserAccount from "./StyledComponents/UserAccount/UserAccount";

const ManagementPortal = () => {
  const [showComponents, setShowComponent] = useContext(PortalContext);

  console.log(showComponents);
  const handleShowComponents = () => {
    if (showComponents.showProperties) {
      return <Properties />;
    } else if (showComponents.showRentalIncome) {
      return <RentalIncome />;
    } else if (showComponents.showUserAccount) {
      return <UserAccount />;
    }
  };
  return (
    <Container>
      <Wrapper>
        <LeftNavigation />

        {handleShowComponents()}
      </Wrapper>
    </Container>
  );
};
export default ManagementPortal;
