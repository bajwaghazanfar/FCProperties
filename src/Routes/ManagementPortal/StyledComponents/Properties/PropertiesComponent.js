import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2rem;
  color: #d5992f;

  font-weight: 300;
`;
export const H3 = styled.h3`
  font-size: 1rem;
  color: ${(props) => `${props.color ? props.color : "#646464 "}`};

  font-weight: 500;
`;
export const BooleanType = styled.div`
  width: auto;
  height: auto;
  border: 1px solid #bf43f5;
  border-radius: 10px;
  background: #eecdfd;
`;
export const TheadFont = styled.h3`
  font-size: 1rem;
  color: ${(props) => `${props.color ? props.color : "black"}`};

  font-weight: 500;
  font-family: "Bebas Neue", cursive;
`;
export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 2.5rem;
  display: grid;
  grid-template-rows: auto auto;
  gap: 30px;
`;
export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const Row1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  padding: 2rem;
  gap: 30px;
`;
export const PageTitle = styled.div`
  width: 100%;
  height: auto;
  font-family: "Poppins", sans-serif;
`;
export const Row2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Table = styled.table`
  width: 100%;

  border-radius: 5px;
  background: #fafafa;
  box-shadow: 20px 20px 80px #cdcdcd, -20px -20px 80px #ffffff;
`;
export const Thead = styled.thead`
  padding: 2rem;
  width: 100%;
  height: 50px;
`;
export const Tr = styled.tr`
  border: 2px solid red;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    -webkit-box-shadow: 5px 18px 50px 0px rgba(0, 0, 0, 0.29);
    box-shadow: 5px 18px 50px 0px rgba(0, 0, 0, 0.29);
  }
`;
export const Th = styled.th`
  border-bottom: 1px solid #ecfcfc;
`;
export const Tbody = styled.tbody``;
export const Td = styled.td`
  border-bottom: 1px solid #e3e3e4;
  padding: 1rem;
`;
export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 30px;
`;

export const InfoContainer = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const InfoTitle = styled.h1`
  font-size: 2rem;
  color: #d5992f;

  font-weight: 300;
`;
export const InfoDescription = styled.h3`
  font-size: 1rem;
  color: #ddddde;

  font-weight: 500;
`;
export const CardWrapper = styled.div`
  width: 250px;
  height: 150px;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #424949;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #d5992f;
    color: black;
  }
  &:hover ${InfoTitle} {
    color: black;
  }
  &:hover ${InfoDescription} {
    color: black;
  }
`;
