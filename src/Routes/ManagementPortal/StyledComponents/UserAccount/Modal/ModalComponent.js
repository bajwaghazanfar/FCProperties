import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2rem;
  color: #d5992f;

  font-weight: 300;
`;
export const H3 = styled.h3`
  font-size: 1rem;
  color: ${(props) => `${props.color ? props.color : "black"}`};
  font-family: "Poppins", sans-serif;

  font-weight: 500;
  font-family: ${(props) =>
    `${(props.font ? props.font : "Montserrat", "sans-serif;")}`}; ;
`;
export const TheadFont = styled.h3`
  font-size: 1rem;
  color: ${(props) => `${props.color ? props.color : "black"}`};

  font-weight: 500;
  font-family: "Bebas Neue", cursive;
`;

export const ModalContainer = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${(props) => `${props.show ? "" : "none"}`};
`;
export const ModalContent = styled.div`
  width: 80%;
  height: 80%;
  padding: 1rem;
  background: white;
  border-radius: 15px;
  overflow-y: auto;
`;
export const ModalTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid black;
`;
export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Table = styled.table`
  width: 100%;
  border-radius: 5px;
`;
export const Thead = styled.thead`
  padding: 2rem;
  width: 100%;
  height: 50px;
`;
export const Tr = styled.tr`
  border: 2px solid red;
`;
export const Th = styled.th``;
export const Tbody = styled.tbody``;
export const Td = styled.td`
  border-bottom: 1px solid #e3e3e4;
  padding: 1rem;
`;
