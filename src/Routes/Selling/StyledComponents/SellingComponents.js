import styled from "styled-components";
export const Span = styled.span`
  color: #d5992f;
`;
export const H3 = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "15px")};
  font-weight: 600;
  color: ${(props) => (props.color ? `${props.color}` : "black")};
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const AboutUsTitle = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "4.4rem")};
  text-align: left;
  font-weight: 600;
  line-height: 80px;
  color: ${(props) => (props.color ? `${props.color}` : "#d5992f ")};
  @media (min-width: 1400px) and (max-width: 3000px) {
    font-size: 6rem;
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

  line-height: 35px;
  color: ${(props) => (props.color ? `${props.color}` : "black")};
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 2rem;
    text-align: center;
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
  position: relative;
  opacity: 0;
  left: -20px;
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
  position: relative;
  opacity: 0;
  left: -20px;
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
    padding: 1rem;
  }
  @media (min-width: 1450px) and (max-width: 3000px) {
    width: 50%;
  }
`;
export const Description = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: 300;
  width: 100%;
  line-height: 30px;
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 1.3rem;
  }
`;
export const SellingPackageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const SellingPackageWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  jusitfy-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    jusitfy-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const SellingPerk = styled.div`
  width: 300px;
  height: 420px;
  padding: 1rem;
  transition: all 0.5s ease-in-out;
  background: #fceeee;
  border-radius: 5px;
  margin-left: 1rem;
  position: relative;
  left: -30px;
  opacity: 0;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0rem;
    margin-left: 0rem;
  }
`;

export const SellingPerkImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 3px;
`;
export const SellingPerkDescriptionWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5rem;
`;
export const SellingPerkDescription = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
`;
export const CenterAlignWrp = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
export const SectionContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Section = styled.div`
  width: 80%;
  height: fit-content;
  padding: 1rem;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  :nth-child(2) {
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    text-align: left;
    padding: 1rem;

    :nth-child(2) {
      flex-direction: column;
    }
     @media (max-width: 330px) {
       width:90%;
  }
`;
export const SectionHeader = styled.h1`
  font-size: 4rem;
  color: #645454;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 5rem;
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
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 1.3rem;
  }
`;
export const SectionSpan = styled.span`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "1rem")};
  color: #d5992f;
  letter-spacing: 1px;
  font-weight: 800;
  margin-right: 5px;
  background-image: radial-gradient(
    circle farthest-corner at 50.7% 54%,
    rgba(204, 254, 152, 1) 0%,
    rgba(229, 253, 190, 1) 92.4%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SectionImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
  position: relative;
  opacity: 0;
  left: -20px;
  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
    border-radius: 5px;
  }
`;
export const Video = styled.video`
  width: 600px;
  height: 600px;
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
