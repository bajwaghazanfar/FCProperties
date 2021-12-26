import { useEffect, useRef } from "react";
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
  H3,
  SellingPackageContainer,
  SellingPerk,
  SellingPerkImg,
  SellingPerkDescription,
  SellingPerkDescriptionWrapper,
  SellingPackageWrapper,
  CenterAlignWrp,
  Span,
  SectionContainer,
  SectionHeader,
  SectionDescription,
  Section,
  SectionImg,
  Video,
  Redirect,
  RedirectHeading,
  RedirectDescription,
  RedirectBtn,
  ServiceTitle,
  ColumnDiv,
  SectionSpan,
} from "./StyledComponents/SellingComponents";
import MouseIcon from "@mui/icons-material/Mouse";
import {
  BasicfadeInAnimation,
  fadeInAnimation,
  sectionAnimation,
  verticalAnimationSlider,
} from "./animations";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import img1 from "./StyledComponents/assets/building1.jpg";
import camera from "./StyledComponents/assets/svg/camera.svg";
import floorplan from "./StyledComponents/assets/svg/floorplan.svg";
import marketing from "./StyledComponents/assets/svg/marketing.svg";
import money from "./StyledComponents/assets/svg/money.svg";
import free from "./StyledComponents/assets/svg/free.svg";
const SellingPage = () => {
  const SellingPerkWrapper = useRef(null);
  const landingPage = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const whatWeOffer = useRef(null);
  const container = useRef(null);
  const sectionWrapper = useRef(null);

  useEffect(() => {
    fadeInAnimation(SellingPerkWrapper, container);
    BasicfadeInAnimation(whatWeOffer);
    BasicfadeInAnimation(sectionWrapper);
    sectionAnimation(section1);
    sectionAnimation(section2);
    sectionAnimation(landingPage);
  });
  return (
    <>
      <Navbar />
      <Container>
        <AboutUsWrapper>
          <LPContentWrapper ref={landingPage}>
            <LPContentL>
              <AboutUsTitle fontSize="4rem" color="#545454 ">
                Sell your property for the right <Span>price.</Span>
              </AboutUsTitle>
              <H4 color="#494949">
                All ready and set for you, scroll down, view our no sales fee
                package and relax.
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
                <LPImage src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
              </LPImgWrapper>
            </LPContentR>
          </LPContentWrapper>
        </AboutUsWrapper>
        <SummaryTextContainer ref={whatWeOffer}>
          <SummaryTextWrp>
            <AboutUsTitle fontSize={"3rem"}>What we offer</AboutUsTitle>
          </SummaryTextWrp>
        </SummaryTextContainer>
        <SectionWrapper ref={sectionWrapper}>
          <DescriptionWrp>
            <Description>
              <SectionSpan fontSize="2rem">We</SectionSpan> are one of the first
              estate agencies to provide our customers with a new way to view
              properties from the comfort of their own home with live video
              calling. <br />
              <br />
              <SectionSpan fontSize="2rem">With</SectionSpan>technology
              advancing day by day, we have thought of a way to cater for our
              customers that have a very busy schedule and can attend viewings
              on the way that won’t disrupt their day-to-day plans.
            </Description>
          </DescriptionWrp>
        </SectionWrapper>

        <SectionContainer>
          <Section ref={section1}>
            <div style={{ position: "relative", opacity: 0, left: "-20px" }}>
              <ServiceTitle>Thousands of Buyers Waiting</ServiceTitle>
              <SectionDescription>
                We have thousands of Buyers just waiting for your property to
                become their perfect home. We aim to make your property stand
                out with professional marketing, clear images of the property
                and a can-do attitude
              </SectionDescription>
            </div>
            <SectionImg src="https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
          </Section>

          <Section ref={section2}>
            <div style={{ position: "relative", opacity: 0, left: "-20px" }}>
              <ServiceTitle>No Sale, No Fee</ServiceTitle>
              <SectionDescription>
                At First Choice Online Properties Ltd, we believe in fairness.
                That is why we do not charge the seller any fee when listing
                their property on our website. However, we will charge the buyer
                with a small fee when purchasing the property
              </SectionDescription>
            </div>
            <SectionImg src="https://images.unsplash.com/photo-1606686626880-0f16b0756aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          </Section>
        </SectionContainer>
        <SummaryTextWrp>
          <AboutUsTitle
            fontSize={"3rem"}
            style={
              window.innerWidth < 768
                ? { textAlign: "center" }
                : { textAlign: "left" }
            }
          >
            Included in our no sales fee package
          </AboutUsTitle>
        </SummaryTextWrp>
        <SellingPackageContainer ref={container}>
          <SellingPackageWrapper ref={SellingPerkWrapper}>
            <SellingPerk>
              <SellingPerkImg src={free} />
              <SellingPerkDescriptionWrapper>
                <SellingPerkDescription>
                  <SectionSpan>Free to sell -</SectionSpan> Sell your property
                  without us charging you a single penny. There is no catch!
                </SellingPerkDescription>
              </SellingPerkDescriptionWrapper>
            </SellingPerk>
            <SellingPerk>
              <SellingPerkImg src={floorplan} />
              <SellingPerkDescriptionWrapper>
                <SellingPerkDescription>
                  <SectionSpan>24/7 Online Support -</SectionSpan> Our online
                  support is available 24/7. Fill out our form and one of our
                  team members will get right back to you
                </SellingPerkDescription>
              </SellingPerkDescriptionWrapper>
            </SellingPerk>
            <SellingPerk>
              <SellingPerkImg src={marketing} />
              <SellingPerkDescriptionWrapper>
                <SellingPerkDescription>
                  <SectionSpan>Expert Advice –</SectionSpan> Our experienced
                  team members promise to try our very best in answering any
                  enquiries you may have
                </SellingPerkDescription>
              </SellingPerkDescriptionWrapper>
            </SellingPerk>
          </SellingPackageWrapper>
        </SellingPackageContainer>
        <Footer />
      </Container>
    </>
  );
};
export default SellingPage;
