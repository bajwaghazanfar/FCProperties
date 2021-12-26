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
  H3,
  FeaturesContainer,
  FeaturesWrapper,
  Feature,
  FeatureInformation,
  FeatureHeading,
  FeatureDescription,
  FeatureImg,
  ColumnDiv,
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
  CenterAlignWrp,
  ServiceTitle,
  SectionSpan,
} from "./StyledComponents/BuyingComponents";
import customerservice from "./StyledComponents/assets/customerservice.svg";
import quick from "./StyledComponents/assets/quick.svg";

import house from "./StyledComponents/assets/house.svg";
import building from "./StyledComponents/assets/building.jpg";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import MouseIcon from "@mui/icons-material/Mouse";
import video from "./StyledComponents/assets/video.svg";
import help from "./StyledComponents/assets/help.svg";
import alert from "./StyledComponents/assets/alert.svg";
import { fadeInAnimation, sectionAnimation } from "./animations";
const BuyingPage = () => {
  const landingPage = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const featureWrapper = useRef(null);
  const redirect = useRef(null);
  useEffect(() => {
    sectionAnimation(landingPage);
    sectionAnimation(section1);
    sectionAnimation(section2);
    fadeInAnimation(featureWrapper);
    fadeInAnimation(redirect);
  });
  return (
    <>
      <Navbar />
      <Container>
        <AboutUsWrapper>
          <LPContentWrapper ref={landingPage}>
            <LPContentL>
              <AboutUsTitle fontSize="4rem" color="#545454 ">
                Our quick and <Span>Simple</Span> process.
              </AboutUsTitle>
              <H4 color="#494949">
                All ready and set for you, just relax, browse the property you
                want, and we'll handle the rest.
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
                <LPImage src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
              </LPImgWrapper>
            </LPContentR>
          </LPContentWrapper>
        </AboutUsWrapper>

        <SectionContainer>
          <Section ref={section1}>
            <div style={{ position: "relative", opacity: 0, left: "-20px" }}>
              <ServiceTitle> Our Quick and Simple Process</ServiceTitle>
              <SectionDescription>
                <SectionSpan fontSize="2rem">Here</SectionSpan> at First Choice
                Online Properties Ltd, we know that you are looking for the
                perfect property that you can ultimately call home. We’ve made
                that easy for you by following our 3-step guide. It’s as simple
                as that!
                <br />
                <br />
                <SectionSpan fontSize="2rem">1.</SectionSpan> Refine your search
                by choosing from our vast variety of homes all over UK and
                Wales. Click on the city or type in your chosen postcode.
                <br />
                <br />
                <SectionSpan fontSize="2rem">2.</SectionSpan> Found something
                that caught your eye? View our up-to-date images and carefully
                constructed floor plans of our properties.
                <br />
                <br />
                <SectionSpan fontSize="2rem">3.</SectionSpan> You’re almost
                done! Get in touch with us via phone or fill out one of our
                forms here
              </SectionDescription>
            </div>
            <SectionImg src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80" />
          </Section>

          <Section ref={section2}>
            <div style={{ position: "relative", opacity: 0, left: "-20px" }}>
              <ServiceTitle> Dedicated Client Support</ServiceTitle>
              <SectionDescription>
                <SectionSpan fontSize="1.6rem">Our</SectionSpan>Team are always
                on stand to answer any enquiries you may have or even to listen
                to some general feedback. Our lines are open from 9.00am to
                5:00pm Monday to Saturday or alternatively fill out our form on
                the Contact Us page and we will get one of our members to
                contact you back.
              </SectionDescription>
            </div>
            <SectionImg src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
          </Section>
        </SectionContainer>
        <SummaryTextContainer>
          <SummaryTextWrp>
            <AboutUsTitle fontSize={"3rem"}>
              What we offer to our buyers
            </AboutUsTitle>
          </SummaryTextWrp>
        </SummaryTextContainer>

        <FeaturesContainer>
          <FeaturesWrapper ref={featureWrapper}>
            <Feature>
              <FeatureInformation>
                <FeatureHeading>24/7 Online Support</FeatureHeading>
                <FeatureDescription>
                  Our online support is available 24/7. Fill out our form and
                  one of our team members will get right back to you
                </FeatureDescription>
              </FeatureInformation>
              <CenterAlignWrp>
                <FeatureImg src={quick} />
              </CenterAlignWrp>
            </Feature>
            <Feature
              bgColor={"  #FBAB7E"}
              bgImage="linear-gradient(62deg,
            #FBAB7E 0%, #F7CE68 100%)"
            >
              <FeatureInformation>
                <FeatureHeading>Live Video Viewings</FeatureHeading>
                <FeatureDescription>
                  You can now view properties from the comfort of your own home.
                </FeatureDescription>
              </FeatureInformation>
              <CenterAlignWrp>
                <FeatureImg src={video} />
              </CenterAlignWrp>
            </Feature>

            <Feature bgImage="linear-gradient(120deg, #f093fb 0%, #f5576c 100%);">
              <FeatureInformation>
                <FeatureHeading>Mortgage Advice</FeatureHeading>
                <FeatureDescription>
                  Speak to our Mortgage Adviser experts to help you get the best
                  deal for your mortgage.
                </FeatureDescription>
              </FeatureInformation>
              <CenterAlignWrp>
                <FeatureImg src={help} />
              </CenterAlignWrp>
            </Feature>
            <Feature bgImage="linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              <FeatureInformation>
                <FeatureHeading>Updated Property Alerts</FeatureHeading>
                <FeatureDescription>
                  Get immediate updates whenever there is a new property on our
                  page.
                </FeatureDescription>
              </FeatureInformation>
              <CenterAlignWrp>
                <FeatureImg src={alert} />
              </CenterAlignWrp>
            </Feature>
          </FeaturesWrapper>
        </FeaturesContainer>
        <SectionContainer>
          <Redirect ref={redirect}>
            <RedirectHeading style={{ textAlign: "center", fontWeight: "600" }}>
              Experts in Buying and Selling
            </RedirectHeading>
            <RedirectDescription style={{ textAlign: "center" }}>
              At First Choice properties we are highly experienced in both
              buying and selling, you can be assured by our extensive portfolio
              that we can make your own property dealing easy, stress-free and
              profitable.
            </RedirectDescription>
            <CenterAlignWrp>
              <RedirectBtn>
                <RedirectDescription>
                  View our properties on Zoopla
                </RedirectDescription>
              </RedirectBtn>
            </CenterAlignWrp>
          </Redirect>
        </SectionContainer>
        <Footer />
      </Container>
    </>
  );
};
export default BuyingPage;
