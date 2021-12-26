import styled from "styled-components";
export const H1 = styled.h1`
  font-size: 2rem;
  color: #d5992f;
  text-align: center;
  font-weight: 300;
`;
export const H3 = styled.h3`
  font-size: 1rem;
  color: #d5992f;
  font-weight: 400;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 1rem;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
export const LeftGridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`;
export const LeftGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #fafafa;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 0rem;
  }
`;
export const Form = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  left: -80px;
  opacity: 0;
  @media (max-width: 768px) {
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  jusitfy-content: center;
  align-items: center;
  gap: 5px;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #dfdfdf;
  background: #fcfdfd;
`;
export const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  width: 100%;
  height: 40px;
  ::placeholder {
    font-family: "Poppins", sans-serif;
  }
`;

export const SubmitBtn = styled.button`
border:none;
background:none;
outline:none;
width:100%:
height:40px;
text-align:center;
background:   #d5992f     ;
padding:1rem;
border-radius:5px;
font-weight:200;
cursor:pointer;
`;
export const RightGrid = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafa;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  position: absolute;
  transform: scale(2);
  filter: brightness(70%);
  @media (max-width: 768px) {
    width: 110%;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImgContainerAfter = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: white;
`;
export const FormButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 200px;
  height: auto;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
