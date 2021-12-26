import styled from "styled-components";

export const PropertyWrapper = styled.div`
  width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  border-radius: 10px;
  background: #f7f7f7;
  box-shadow: 20px 20px 60px #d2d2d2, -20px -20px 60px #ffffff;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const LeftGrid = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const PropertyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;
export const RightGrid = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
export const PropertyTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
`;
export const PropertyType = styled.h3`
  font-size: 1.3rem;
  font-weight: 300;
  color: #d5992f;
  text-align: center;
`;
export const PropertyInfo = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #C4C2C2 ;
  text-align;left
`;
export const PropertyBtmWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const Btn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;
export const BtnText = styled.h3`
  font-size: 1rem;
  letter-spacing: 3px;
  font-weight: 300;
  text-decoration: underline;
  color: #d5992f;
`;

export const Price = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  color: black;
`;
