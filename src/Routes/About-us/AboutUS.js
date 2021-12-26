import { useRef, useEffect } from "react";
import Navbar from "../../GlobalComponents/Navbar/Navbar";
import {
  AboutUsWrapper,
  AboutUsTitle,
  Container,
  LPContentWrapper,
  LPContentL,
  LPContentR,
  LPImgWrapper,
  LPImage,
  H4,
  SummaryTextContainer,
  SummaryTextWrp,
  SectionWrapper,
  Description,
  DescriptionWrp,
  PolicyContainer,
  PolicyWrapper,
  PolicyImg,
  PolicyTitle,
  PolicyImgWrapper,
  H3,
  ImagesContainer,
  Span,
  ColumnDiv,
  SectionContainer,
  Section,
  SectionDescription,
  SectionImg,
  CenterAlignWrp,
  ServiceTitle,
  Slidesh,
} from "./StyledComponents/AboutUsComponents";
import SlideShowComponent from "./StyledComponents/Slideshow/slideShowComponent";
import building1 from "./StyledComponents/building1.jpg";
import consulting from "./StyledComponents/consulting.jpg";
import customerservice from "./StyledComponents/customerservice.svg";
import quick from "./StyledComponents/quick.svg";
import house from "./StyledComponents/house.svg";
import House from "./StyledComponents/house.jpg";
import skyscraper from "./StyledComponents/skyscraper.jfif";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import MouseIcon from "@mui/icons-material/Mouse";
import {
  fadeInSlideshow,
  landingPageAnimation,
  sectionAnimation,
} from "./animations";

const AboutUs = () => {
  const landingPage = useRef(null);
  const slideShowContainer = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  useEffect(() => {
    landingPageAnimation(landingPage);
    sectionAnimation(section1);
    fadeInSlideshow(slideShowContainer);
  });

  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1609601998845-320040b651cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      header: "Who we are.",
      description:
        "First Choice Online Properties is a family-owned online estate agency. We are a team of highly experienced professionals that operate from Birmingham.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1608590766866-ae8d39690bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      header: "The Narrative.",
      description:
        "First Choice Properties operates from the heart of Birmingham and serves customers nationwide, across England, Ireland and Wales. We boast an extensive collection of properties, ranging from apartments, to terraced housing. Under the guidance of our dedicated, experienced team at First Choice Properties, we endeavour to find the property most suitable to your needs. ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587301669187-732ea66e7617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      header: "Comfort.",
      description:
        "Due to the COVID-19 pandemic, various issues arise that have prevented us from conducting face-to-face meetings, or property viewings, with our clients. Therefore, we  have endeavoured to offer our services and continued support to our clientele through online video conferences and virtual viewings. ",
    },
  ];
  return (
    <>
      <Navbar />
      <Container>
        <AboutUsWrapper>
          <LPContentWrapper ref={landingPage}>
            <LPContentL>
              <AboutUsTitle fontSize="4rem" color="#545454 ">
                Learn more about <Span>FCP </Span>
              </AboutUsTitle>
              <H4 color="#494949">
                Learn more about what FCP represents, our company history and
                the services we offer.
              </H4>
              <ColumnDiv>
                <MouseIcon style={{ color: "#d5992f " }} />
                <H3 fontSize="1.1rem" color="#d5992f">
                  Scroll Down For More
                </H3>
              </ColumnDiv>
            </LPContentL>
            <LPContentR>
              <LPImgWrapper>
                <LPImage src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
              </LPImgWrapper>
            </LPContentR>
          </LPContentWrapper>
        </AboutUsWrapper>

        <ImagesContainer ref={slideShowContainer}>
          <SlideShowComponent data={images} />
        </ImagesContainer>

        <SectionContainer>
          <CenterAlignWrp>
            <ServiceTitle fontSize="50px">What we stand for...</ServiceTitle>
            <H3 color="#979A9A">
              First Choice Online Properties Ltd aim to provide exceptional
              customer service whilst helping our customers get the best deal
            </H3>
          </CenterAlignWrp>
          <Section ref={section1}>
            <div style={{ position: "relative", opacity: 0, left: "-30px" }}>
              <ServiceTitle fontSize="50px">Our Promise</ServiceTitle>
              <SectionDescription>
                We promise to stick to our values and provide exceptional
                service. Our main priority is to put the customer first and
                listen to their needs. Our experts provide our customers with
                advice that will help them get the best deal for their property
              </SectionDescription>
            </div>
            <SectionImg src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </Section>
        </SectionContainer>

        <Footer />
      </Container>
    </>
  );
};
export default AboutUs;
