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
  CardImageWrapper,
  CardImage,
  ModalContainer,
} from "./RentalIncomeComponents";
import { mockData } from "./mockData";

import image from "./building1.jpg";
import Modal from "./Modal/Modal";
const RentalIncome = () => {
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
            <H1>View your properties on rent below.</H1>
            <H3 color="#ddddde ">Your current properties are listed below</H3>
          </PageTitle>
          <CardContainer>
            {mockData.map((map, index) => (
              <CardWrapper onClick={showPropertyWebsite}>
                <CardImageWrapper>
                  <CardImage src={map.image != null ? map.image : image} />
                </CardImageWrapper>
                <InfoContainer>
                  <InfoTitle>{map.propertyNo}</InfoTitle>
                  <InfoDescription>{map.propertyAddress}</InfoDescription>
                  <InfoDescription>{map.propertyPostCode}</InfoDescription>
                  <InfoDescription>{map.datePurchased}</InfoDescription>
                </InfoContainer>
              </CardWrapper>
            ))}
          </CardContainer>
        </Row1>
        <Row2></Row2>
      </Container>
    </>
  );
};
export default RentalIncome;
