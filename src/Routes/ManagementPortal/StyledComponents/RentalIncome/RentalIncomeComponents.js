import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2rem;
  color: #d5992f;

  font-weight: 300;
`;
export const H3 = styled.h3`
  font-size: 1rem;
  color: ${(props) => `${props.color ? props.color : "black"}`};

  font-weight: 500;
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
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  padding-left: 0;
  gap: 30px;
  margin-top: 40px;
`;

export const InfoContainer = styled.div`
  width: 100%;
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
  color: #909090;

  font-weight: 500;
`;
export const CardWrapper = styled.div`
  width: 400px;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
export const CardImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  filter: brightness(60%);
  transition: all 0.5s ease-in-out;
  :hover {
    -webkit-box-shadow: 16px 22px 49px 11px rgba(0, 0, 0, 0.38);
    box-shadow: 16px 22px 49px 11px rgba(0, 0, 0, 0.38);
  }
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
`;
export const ModalContent = styled.div`
  width: 80%;
  height: 80%;
  padding: 1rem;
  background: white;
  border-radius: 15px;
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
