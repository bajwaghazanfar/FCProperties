import styled from "styled-components";
export const ButtonH3 = styled.h3`
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: initial;
  color: ${(props) => `${props.color ? props.color : "black"}`};
`;
export const MenuContainer = styled.div`

    width:100%;
    height:100vh:
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: #f9fafa;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: fixed;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  border-left: 3px solid #d5992f;
  border-radius: 3px;

  border-radius: 3px;
`;
