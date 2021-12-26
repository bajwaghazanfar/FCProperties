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
  ContactUsContainer,
  ContactUsWrapper,
  GridL,
  GridR,
  Img,
  ContactUsTitle,
  NameInputWrapper,
  InputWrapper,
  H3,
  Input,
  Form,
  TextArea,
  SubmitBtn,
  ImgContainer,
  ImgContainerAfter,
  ContactInfoWrapper,
  ContactInfo,
} from "./StyledComponents/ContactUsComponents";
import {
  fadeInAnimation,
  verticalAnimationSlider,
  imageRevealAnimation,
  contactFormAnimation,
  fadeInContactInfo,
} from "./animations";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import contactUs from "./StyledComponents/assets/contactUs.jpg";
import contact from "./StyledComponents/assets/contact2.svg";
import { ServiceTitle } from "../Home/StyledComponents/HomeComponents";

const ContactUs = () => {
  //FOR THE IMAGE REVEAL ANIMATION
  const container = useRef(null);
  const image = useRef(null);
  const imageReveal = useRef(null);
  //For contact form Animation
  const contactFormContainer = useRef(null);
  const contactForm = useRef(null);
  const contactInfo = useRef(null);

  useEffect(() => {
    imageRevealAnimation(image, imageReveal, container, contactInfo);
    contactFormAnimation(container, contactForm);
    fadeInContactInfo(contactInfo, container);
  });
  return (
    <>
      <Navbar />
      <Container>
        <AboutUsWrapper>
          <LPContentWrapper>
            <LPContentL>
              <ServiceTitle fontSize="60px">Need to get in touch?</ServiceTitle>
              <AboutUsTitle fontSize="20px" color="grey">
                Have an enquiry, or want to give us some feedback? Contact us
                now!
              </AboutUsTitle>
            </LPContentL>
            <LPContentR>
              <LPImgWrapper>
                <LPImage src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80" />
              </LPImgWrapper>
            </LPContentR>
          </LPContentWrapper>
        </AboutUsWrapper>
        <ContactUsContainer ref={container}>
          <ContactUsWrapper>
            <GridL>
              <ImgContainer>
                <Img src={contactUs} ref={image} />
                <ImgContainerAfter ref={imageReveal} />
              </ImgContainer>
              <ContactInfoWrapper ref={contactInfo}>
                <ContactInfo>
                  <ContactUsTitle fontSize="2rem" style={{ fontWeight: "300" }}>
                    Birmingham
                  </ContactUsTitle>
                  <H3>
                    982 Tyburn Road <br />
                    Sparkbrook
                    <br />
                    B24 0TL
                  </H3>
                </ContactInfo>

                <ContactInfo>
                  <ContactUsTitle fontSize="2rem" style={{ fontWeight: "300" }}>
                    Telephone
                  </ContactUsTitle>
                  <H3>07720588749</H3>
                </ContactInfo>
              </ContactInfoWrapper>
            </GridL>
            <GridR ref={contactForm}>
              <ContactUsTitle>Contact Us</ContactUsTitle>
              <H3>Have an enquiry or some feedback for us?</H3>

              <H3>
                Our lines are open from 9:00 am to 5:00 pm or alternatively fill
                out the form below.
              </H3>
              <Form>
                <NameInputWrapper>
                  <InputWrapper>
                    <H3>First name</H3>
                    <Input placeholder="Enter First Name" />
                  </InputWrapper>

                  <InputWrapper>
                    <H3>Last name</H3>
                    <Input placeholder="Enter Last Name" />
                  </InputWrapper>
                </NameInputWrapper>
                <InputWrapper>
                  <H3>Email Address</H3>
                  <Input placeholder="Enter Email Address" />
                </InputWrapper>

                <InputWrapper>
                  <H3>Message</H3>
                  <TextArea placeholder="Enter Message" height="80px" />
                </InputWrapper>
                <SubmitBtn>
                  <H3 color="white">Submit</H3>
                </SubmitBtn>
              </Form>
            </GridR>
          </ContactUsWrapper>
        </ContactUsContainer>
        <Footer />
      </Container>
    </>
  );
};
export default ContactUs;
