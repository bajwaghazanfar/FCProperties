import styled from "styled-components";
export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  line-height: 80px;
  color: ${(props) => (props.color ? `${props.color}` : "black")};
  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
    line-height: 50px;
  }
  @media (max-width: 330px) {
    font-size: 25px;
  }
`;
export const H2 = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
export const H3 = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "15px")};
  font-weight: 600;
  color: ${(props) => (props.color ? `${props.color}` : "black")};
  @media (max-width: 768px) {
    color: grey;
    font-weight: 400;
    text-align: center;
  }
`;
export const P = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
export const Span = styled.span`
  font-size: 50px;
  font-weight: 600;
  color: #d5992f;
  @media (max-width: 768px) {
    font-size: 30px;
    text-align: left;
    align-items: left;
    line-height: 50px;
  }
  @media (max-width: 330px) {
    font-size: 25px;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const LandingPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  @media (max-width: 768px) {
    height: auto;
  }
`;
export const LPContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 45% 55%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;
export const LPContentL = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 5rem;
  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;
export const LPContentR = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  
    
`;
export const LPImgWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const LPImage = styled.img`
  width: 70%;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const Slide = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50px;
  background: #f7f7f7;
  box-shadow: 20px 20px 60px #d2d2d2, -20px -20px 60px #ffffff;
  padding: 0.4rem;
  @media (max-width: 768px) {
    width: 200px;
    height: 100%;
  }
`;

export const CompanyFinanceInfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
export const FinanceInfoWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem;
  background-color: #f3f3f3;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FinanceInfo = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const LatestPropertiesContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: 20% 80%;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const LatestProperties = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
  gap: 10px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
export const LatestPropertiesH1 = styled.h1`
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => (props.default ? "5px" : "2px")};
c
  text-align: left;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "regular")};
  color: ${(props) => (props.color ? props.color : "black")};
  &:hover {
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const LatestPropertiesButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  transition: all ease-in-out 0.5s;
  padding: 0.5rem;
  border-radius: 5px;
  &:hover {
    background: #d5992f;
    color: white;
  }
`;
export const PropertyContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  gap: 30px;
  margin-top: 40px;
`;
export const ViewAllPropertiesBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
`;
export const CenterAlignWrp = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  gap: 30px;
  @media (max-width: 768px) {
    height: auto;
  }
`;
export const ServiceContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  left: -20px;
  opacity: 0;
`;
export const Service = styled.div`
  width: 400px;
  height: 270px;
  display: flex;
  flex-direction: column;
  jusitfy-content: center;
  align-items: center;
  padding: 2rem;
  background: #f7f7f7;
  box-shadow: 20px 20px 60px #d2d2d2, -20px -20px 60px #ffffff;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100px;
`;
export const ServiceTitle = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "20px")};
  color: #d5992f;
  letter-spacing: 1px;
  font-weight: 800;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
export const ServiceDescription = styled.h3`
  font-size: 14px;
  color: black;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ServiceWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SectionContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Section = styled.div`
  width: 80%;

  height: 400px;
  padding: 1rem;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;

  :nth-child(2) {
    flex-direction: row-reverse;
  }
  :nth-child(4) {
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    display: flex;
    height: auto;
    flex-direction: column-reverse;
    gap: 30px;
    text-align: left;
    padding: 1rem;

    :nth-child(2) {
      flex-direction: column-reverse;
    }
    :nth-child(4) {
      flex-direction: column-reverse;
    }
  }
`;
export const SectionHeader = styled.h1`
  font-size: 4rem;
  color: #645454;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 4.5rem;
  }
`;
export const SectionDescription = styled.h3`
  font-size: 1rem;
  color: #979797;
  font-weight: 400;
  width: 100%;
  line-height: 30px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const SectionImg = styled.img`
  width: 400px;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
  position: relative;
  left: -20px;
  opacity: 0;
  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    border-radius: 0px;
  }
`;
export const Video = styled.video`
  width: 95%;
  height: 100%;
  border-radius: 2px;
  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
  }
`;
export const Redirect = styled.div`
width:800px;
  height:400px;
  padding:2rem;
  display:flex;
  flex-direction:column;
  gap:20px;
  justify-content:center;
  align:items:center;
  text-align:center;

 background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80");
border-radius:10px;
cursor:pointer;
transition: all .5s ease-in-out ;
 position: relative;
  left: -20px;
  opacity: 0;
:hover{
  transform:scale(1.05);
}
  @media (max-width: 768px) {
    width:100%;
    height:auto;
  }

`;
export const RedirectHeading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
`;
export const RedirectDescription = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;
export const RedirectBtn = styled.button`
  width: auto;
  height: auto;
  padding: 1rem;
  background: none;
  outline: none;
  border: none;
  background: #d5992f;
  border-radius: 10px;
  cursor: pointer;
`;
