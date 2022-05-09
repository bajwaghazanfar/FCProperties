import Navbar from "../../GlobalComponents/Navbar/Navbar";
import {
  Container,
  H1,
  LandingPageWrapper,
  LPContentL,
  LPContentR,
  LPContentWrapper,
  LPImage,
  Span,
  H3,
  LPImgWrapper,
  Slide,
  FinanceInfoWrapper,
  FinanceInfo,
  P,
  LatestPropertiesContainer,
  LatestProperties,
  LatestPropertiesButton,
  LatestPropertiesH1,
  PropertyContainer,
  CenterAlignWrp,
  ViewAllPropertiesBtn,
  ServiceContainer,
  Service,
  ServiceImage,
  ServiceTitle,
  ServiceDescription,
  ServiceWrapper,
  SectionContainer,
  Section,
  SectionHeader,
  SectionDescription,
  SectionImg,
  Redirect,
  RedirectBtn,
  RedirectDescription,
  RedirectHeading,
} from "./StyledComponents/HomeComponents";
import building1 from "./assets/building1.jpg";
import building from "./assets/SVG/building.svg";
import search from "./assets/SVG/search.svg";
import transaction from "./assets/SVG/transaction.svg";
import controlpanel from "./assets/SVG/controlpanel.svg";
import message from "./assets/SVG/message.svg";
import { useEffect, useRef } from "react";
import {
  fadeInAnimation,
  verticalAnimationSlider,
  LogoAnimation,
  landingPageAnimation,
  sectionAnimation,
} from "./animations";
import {
  LeftGrid,
  PropertyImg,
  PropertyWrapper,
  PropertyTitle,
  PropertyInfo,
  PropertyType,
  PropertyBtmWrapper,
  RightGrid,
  Btn,
  Price,
  BtnText,
} from "../../GlobalComponents/Card/PropertyComponent";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import city from "./assets/SVG/city.svg";
import { Helmet } from "react-helmet";
import connection from "./assets/SVG/connection.svg";
import mission from "./assets/SVG/mission.svg";
import feeling from "./assets/SVG/feeling.svg";
const Home = () => {
  const HeadingWrapper = useRef(null);
  const serviceContainer = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const redirect = useRef(null);
  const Img = useRef(null);

  useEffect(() => {
    landingPageAnimation(HeadingWrapper);
    sectionAnimation(section1);
    sectionAnimation(section2);
    sectionAnimation(section3);
    fadeInAnimation(serviceContainer);
    fadeInAnimation(redirect);
  });
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
          name="Home| First Choice Properties"
          content="Interested in finding your dream home, or looking for the suitable price for your home? Explore our services and buying and selling packages below"
        />
        <title>Home| First Choice Properties</title>
      </Helmet>
      <Navbar />
      <Container>
        <LandingPageWrapper>
          <LPContentWrapper>
            <LPContentL ref={HeadingWrapper}>
              <Span style={{ position: "relative", left: "-20px", opacity: 0 }}>
                Bespoke properties.
              </Span>

              <H1 style={{ position: "relative", left: "-20px", opacity: 0 }}>
                Discover a wide range of properties <Span>near you</Span>
              </H1>
              <H3 style={{ position: "relative", left: "-20px", opacity: 0 }}>
                Unforgettable experiences start with First Choice Properties.
                Find the right property nearby, or in faraway places and access
                unique beautiful homes and places across the UK
              </H3>
            </LPContentL>
            <LPContentR>
              <LPImgWrapper>
                <LPImage src={city} id="#LPImage" ref={Img} />
              </LPImgWrapper>
            </LPContentR>
          </LPContentWrapper>
        </LandingPageWrapper>
        <ServiceContainer ref={serviceContainer}>
          <CenterAlignWrp>
            <ServiceTitle fontSize="50px">How it works...</ServiceTitle>
            <H3 color="#979A9A">
              Here at First Choice Online Properties Ltd, we know that you are
              looking for the perfect property that you can ultimately call
              home. We’ve made that easy for you by following our 3 - step
              guide. It’s as simple as that!
            </H3>
          </CenterAlignWrp>
          <ServiceWrapper>
            <Service>
              <ServiceImage src={search} />
              <ServiceTitle>Begin your search..</ServiceTitle>
              <ServiceDescription>
                Refine your search by choosing from our vast variety of homes
                from all over the UK and Wales. Click on the city or type in
                your chosen postcode
              </ServiceDescription>
            </Service>

            <Service>
              <ServiceImage src={building} />
              <ServiceTitle>Find Your Property</ServiceTitle>
              <ServiceDescription>
                Found something that caught your eye? View our up-to-date images
                and carefully constructed floorplans of each of our properties.
              </ServiceDescription>
            </Service>
            <Service>
              <ServiceImage src={transaction} />
              <ServiceTitle>Purchase your property</ServiceTitle>
              <ServiceDescription>
                You’re almost done! Get in touch with us via phone or email.
              </ServiceDescription>
            </Service>
          </ServiceWrapper>
        </ServiceContainer>
        <FinanceInfoWrapper>
          <FinanceInfo>
            <H1 color="#d5992f">£699</H1>
            <P>Packages starting from £699</P>
          </FinanceInfo>
          <FinanceInfo>
            <H1 color="#d5992f">10+</H1>
            <P>Properties for sale</P>
          </FinanceInfo>
          <FinanceInfo>
            <H1 color="#d5992f">Perks</H1>
            <P>
              Extra client priviliges, when you purchase through First Choice
              Properties
            </P>
          </FinanceInfo>
          <FinanceInfo>
            <H1 color="#d5992f">1M+</H1>
            <P>In profits made through us!</P>
          </FinanceInfo>
        </FinanceInfoWrapper>

        <SectionContainer>
          <CenterAlignWrp>
            <ServiceTitle fontSize="50px">The 3 P's</ServiceTitle>
            <H3 color="#979A9A">
              Our customers are at the heart of everything we do and stand for.
              That is why we always but our customers first. Fc Online
              Properties live by the 3 P’s:
            </H3>
          </CenterAlignWrp>
          <Section ref={section1}>
            <div style={{ position: "relative", opacity: 0, left: "-20px" }}>
              <ServiceTitle fontSize="50px">Passionate</ServiceTitle>
              <SectionDescription>
                – Our experts thrive in going above and beyond our customers’
                expectations to make their experience a positive one.
              </SectionDescription>
            </div>
            <SectionImg src={mission} />
          </Section>
          <Section ref={section2}>
            <div style={{ position: "relative", opacity: 0, left: "-20px" }}>
              <ServiceTitle fontSize="50px">Professional</ServiceTitle>
              <SectionDescription>
                Our Team members will always speak to you in a professional
                manner and will take accountability to fix what is right if they
                are in the wrong.
              </SectionDescription>
            </div>
            <SectionImg src={feeling} />
          </Section>
          <Section ref={section3}>
            <div style={{ position: "relative", opacity: 0, left: "-20px" }}>
              <ServiceTitle fontSize="50px">People</ServiceTitle>
              <SectionDescription>
                We promise to listen to our customer’s needs and treat them with
                respect.
              </SectionDescription>
            </div>
            <SectionImg src={connection} />
          </Section>
        </SectionContainer>
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
export default Home;
