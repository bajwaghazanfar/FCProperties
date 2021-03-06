import styled from "styled-components";

export const H3 = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "15px")};
  font-weight: 400;
  color: ${(props) => (props.color ? `${props.color}` : "black")};
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Span = styled.span`
  color: #d5992f;
`;
export const AboutUsTitle = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "4.4rem")};
  text-align: left;
  font-weight: 600;
  line-height: 80px;
  color: ${(props) => (props.color ? `${props.color}` : "#d5992f ")};
  @media (min-width: 1400px) and (max-width: 3000px) {
    font-size: 5rem;
    line-height: 100px;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 60px;
    text-align: center;
  }
`;
export const ServiceTitle = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "40px")};
  color: #d5992f;
  letter-spacing: 1px;
  font-weight: 800;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;
export const H4 = styled.h4`
  font-size: 1.1rem;
  font-weight: 300;
  text-align: left;
  line-height: 35px;
  color: ${(props) => (props.color ? `${props.color}` : "black")};
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;
export const ColumnDiv = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
export const AboutUsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const LPContentWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    height: auto;
  }
`;
export const LPContentL = styled.div`
  padding: 2rem;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 5rem;
  position: relative;
  opacity: 0;
  left: -20px;
  @media (max-width: 768px) {
    margin-left: 0rem;
    padding: 1rem;
    margin-top: 0rem;
  }
`;
export const LPContentR = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 0;
  left: -20px;
`;
export const LPImgWrapper = styled.div`
  width: 70%;
  height: 500px;
  padding: 0.1rem;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
  @media (min-width: 1450px) and (max-width: 3000px) {
    height: 70%;
  }
`;
export const LPImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 768px) {
    border-radius: 10px;
    height: 60%;
  }
`;

export const SummaryTextContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SummaryTextWrp = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:after {
    content: "";
    margin: 30 px auto 0;
    display: block;
    width: 66%;
    height: 4px;
    background: #d5992f;
  }
`;
export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;
export const DescriptionWrp = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 1450px) and (max-width: 3000px) {
    width: 50%;
  }
`;
export const Description = styled.p`
  font-size: 1.2rem;
  text-align: left;
  color: black;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 3rem;
  }
`;
export const ContactUsContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const ContactUsWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 30px;
  padding: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;
export const GridL = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
  transform: scale(2);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
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
export const GridR = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: -20px;
  opacity: 0;
`;
export const ContactUsTitle = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "3rem")};
  font-weight: 600;
  color: #d5992f;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 3rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 5px;
`;
export const Input = styled.input`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : "30px")};
  outline: none;
  border: 1px solid #dfdfdf;
  background: #fcfdfd;
  padding: 0.5rem;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : "30px")};
  outline: none;
  border: 1px solid #dfdfdf;
  background: #fcfdfd;
  padding: 0.5rem;
`;
export const NameInputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 30px;
`;
export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0.5rem;
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
export const ContactInfoWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  jusitfy-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    jusitfy-content: center;
    text-align: center;
  }
`;
export const ContactInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  left: -50px;
  opacity: 0;
`;
