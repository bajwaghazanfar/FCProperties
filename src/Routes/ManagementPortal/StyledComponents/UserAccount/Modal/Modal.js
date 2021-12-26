import {
  ModalContainer,
  ModalTitle,
  H1,
  ModalContent,
  Table,
  Tbody,
  Thead,
  Td,
  TableContainer,
  Th,
  Tr,
  H3,
  TheadFont,
} from "./ModalComponent";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { mockData } from "./mockRentData";

const Modal = ({ show, setShowModal }) => {
  console.log(show);
  return (
    <ModalContainer show={show}>
      <ModalContent>
        <ModalTitle>
          <H1>Rent for 50 Montgomery Street</H1>
          <Button
            onClick={() => {
              setShowModal(false);
            }}
          >
            <CloseIcon style={{ fontSize: "40px" }} />
          </Button>
        </ModalTitle>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <TheadFont>Date</TheadFont>
                </Th>
                <Th>
                  <TheadFont>Property Adress</TheadFont>
                </Th>
                <Th>
                  <TheadFont>Property Post Code</TheadFont>
                </Th>
                <Th>
                  <TheadFont>Amount</TheadFont>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {mockData.map((map, index) => (
                <Tr>
                  <Td>
                    <H3>{map.dateRentCollected}</H3>
                  </Td>
                  <Td>
                    <H3>{map.propertyAddress}</H3>
                  </Td>
                  <Td>
                    <H3>{map.propertyPostCode}</H3>
                  </Td>
                  <Td>
                    <H3 color="#E75E4E ">{`£${map.amountCollected}`}</H3>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </ModalContent>
    </ModalContainer>
  );
};
export default Modal;
