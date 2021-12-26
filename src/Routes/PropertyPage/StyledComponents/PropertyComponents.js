import styled from "styled-components";
export const H1 = styled.h1`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "25px")};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : "500")};
  color: ${(props) => (props.color ? `${props.color}` : "black")};
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 40x;
  }
`;
export const H3 = styled.h3`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "15px")};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : "500")};
  color: ${(props) => (props.color ? `${props.color}` : "black")};
  @media (max-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1450px) and (max-width: 3000px) {
    font-size: 25px;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: fit-content;
`;
export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
export const LandingPageImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  filter: brightness(100%);
  transform: scale(2.5);
  opacity: 0;
  object-fit: cover;
`;
export const PropertyInfoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PropertyInfoWrapper = styled.div`
  width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: 60% 40%;
  position: relative;

  box-shadow: 28px 25px 55px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 28px 25px 55px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 28px 25px 55px rgba(0, 0, 0, 0.5);
  border-top-right-radius: 5px;
  opacity: 0;
  left: 0px;
  border-bottom-right-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const PropertyInfoL = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2c81d1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  gap: 10px;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
export const Price = styled.h1`
  font-size: 3rem;
  color: white;
  letter-spacing: 3px;
  font-weight: 400;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const Address = styled.p`
  font-size: 1.2rem;
  color: #d0d3d4;
  text-align: left;
`;
export const Button = styled.button`
border:none;
background:none;
outline:none;
width:100%:
height:40px;
text-align:center;
background:  #6C89A5    ;
padding:1rem;
border-radius:5px;
font-weight:200;
cursor:pointer;

`;

export const PropertyInfoR = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  background: rgba(52, 53, 55, 0.8);
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.4;
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2 rem;
  border: 1px solid #44484d;
`;

export const ImagesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;
export const SlideshowImg = styled.img`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "auto")};
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const SlideshowDotWrapper = styled.a`
  width: fit-content;
  height: auto;
  padding: 0.5rem;
`;
export const SlideshowDot = styled.img`
  width: 50px;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
`;
export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SectionWrapper = styled.div`
  width: 70%;
  height: fit-content;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  :nth-child(2) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
    :nth-child(2) {
      flex-direction: column;
    }
  }
`;
export const SectionImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const SectionInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SectionTitle = styled.h1`
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 400;
  color: #d5992f;
  font-family: "Zen Maru Gothic", sans-serif;
`;
export const SectionDescription = styled.h3`
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const PropertyDescriptionContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  jusify-content: center;
  align-items: center;
`;
export const PropertyDescriptionWrapper = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 28px 5px rgba(0, 0, 0, 0.53);
  box-shadow: 5px 5px 28px 5px rgba(0, 0, 0, 0.53);
`;
export const PolicyContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const PolicyWrapper = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  @media (max-width: 768px) {
    width: 90vw;
  }

  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;
export const PolicyImgWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const PolicyImg = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: all 0.5s ease-in-out;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
  }
`;
export const PolicyTitle = styled.div`
  width: 100%;
  display: flex;
  jusitfy-content: center;
  align-items: center;
  text-align: center;
`;
