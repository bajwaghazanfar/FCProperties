import { useState } from "react";
import {
  Container,
  H1,
  H3,
  Row1,
  Row2,
  Table,
  Tbody,
  Thead,
  Td,
  TableContainer,
  Th,
  Tr,
  TheadFont,
  CardContainer,
  CardWrapper,
  InfoContainer,
  InfoTitle,
  InfoDescription,
  PageTitle,
  GraphContainer,
  CenterAlignWrp,
} from "./UserAccountComponents";
import Modal from "./Modal/Modal";
import HomeIcon from "@mui/icons-material/Home";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import Charts from "./Charts";
const UserAccount = () => {
  const [showModal, setModal] = useState(false);

  const showPropertyWebsite = (data) => {
    setModal(true);
  };
  return (
    <>
      <Modal show={showModal} setShowModal={setModal} />
      <Container>
        <Row1>
          <PageTitle>
            <H1>Hi Ammar,</H1>
            <H3 color="#424949 ">
              Welcome to your account, view your details below
            </H3>
          </PageTitle>
          <CardContainer>
            <CardWrapper>
              <InfoContainer>
                <InfoTitle>5</InfoTitle>
                <InfoDescription>Properties</InfoDescription>
              </InfoContainer>
              <HomeIcon
                style={{ fontSize: "50px", color: "white", fontWeight: "300" }}
              />
            </CardWrapper>

            <CardWrapper>
              <InfoContainer>
                <InfoTitle>£3000</InfoTitle>
                <InfoDescription>Profits</InfoDescription>
              </InfoContainer>
              <InfoDescription
                style={{ fontSize: "50px", color: "white", fontWeight: "300" }}
              >
                £
              </InfoDescription>
            </CardWrapper>

            <CardWrapper>
              <InfoContainer>
                <InfoTitle>4</InfoTitle>
                <InfoDescription>Rental Properties</InfoDescription>
              </InfoContainer>
              <OtherHousesIcon
                style={{ fontSize: "50px", color: "white", fontWeight: "300" }}
              />
            </CardWrapper>
          </CardContainer>
          <GraphContainer>
            <CenterAlignWrp>
              <H1>Overview of your profits</H1>
            </CenterAlignWrp>
            <Charts />
          </GraphContainer>
        </Row1>
      </Container>
    </>
  );
};
export default UserAccount;
