import PortalContext from "./PortalContext";
import { useState } from "react";

const PortalProvider = (props) => {
  const [showComponents, setShowComponent] = useState({
    showProperties: false,
    showRentalIncome: false,
    showUserAccount: true,
  });
  return (
    <PortalContext.Provider value={[showComponents, setShowComponent]}>
      {props.children}
    </PortalContext.Provider>
  );
};
export default PortalProvider;
