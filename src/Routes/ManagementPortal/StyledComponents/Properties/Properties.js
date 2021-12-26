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
  BooleanType,
} from "./PropertiesComponent";
import { mockData } from "./mockData";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
const Properties = () => {
  return (
    <Container>
      <Row1>
        <PageTitle>
          <H1>View your properties</H1>
          <H3 color="#ddddde ">Your current properties are listed below</H3>
        </PageTitle>
      </Row1>
      <Row2>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <H3 color="#979A9A ">Property no.</H3>
              </Th>
              <Th>
                <H3 color="#979A9A ">Property Adress</H3>
              </Th>
              <Th>
                <H3 color="#979A9A ">Property Post Code</H3>
              </Th>
              <Th>
                <H3 color="#979A9A ">Date purchased</H3>
              </Th>
              <Th>
                <H3 color="#979A9A ">Property rented?</H3>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {mockData.map((map, index) => (
              <Tr>
                <Td>
                  <H3>{map.propertyNo}</H3>
                </Td>
                <Td>
                  <H3>{map.propertyAddress}</H3>
                </Td>
                <Td>
                  <H3>{map.propertyPostCode}</H3>
                </Td>
                <Td>
                  <H3 color="#E75E4E ">{map.datePurchased}</H3>
                </Td>
                <Td>
                  <BooleanType>
                    <H3 color="#BF43F5  ">{map.propertyRented}</H3>
                  </BooleanType>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Row2>
    </Container>
  );
};
export default Properties;
