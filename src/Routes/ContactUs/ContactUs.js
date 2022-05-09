import { useEffect, useRef, useState } from "react";
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
  Span,
  ColumnDiv,
} from "./StyledComponents/ContactUsComponents";
import {
  fadeInAnimation,
  verticalAnimationSlider,
  imageRevealAnimation,
  contactFormAnimation,
  fadeInContactInfo,
  sectionAnimation,
} from "./animations";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import contactUs from "./StyledComponents/assets/contactUs.jpg";
import { Helmet } from "react-helmet";
import MouseIcon from "@mui/icons-material/Mouse";
import emailjs from "emailjs-com";
const ContactUs = () => {
  //FOR THE IMAGE REVEAL ANIMATION
  const container = useRef(null);
  const image = useRef(null);
  const imageReveal = useRef(null);
  //For contact form Animation
  const contactFormContainer = useRef(null);
  const contactForm = useRef(null);
  const contactInfo = useRef(null);
  //For landing page
  const landingPage = useRef(null);
  //Use state for forms
  const [emailOK, setEmailOK] = useState(false);

  useEffect(() => {
    sectionAnimation(landingPage);
    contactFormAnimation(container, contactForm);
    fadeInContactInfo(contactInfo, container);
    imageRevealAnimation(image, imageReveal, container, contactInfo);
  });

  //On Submit Form
  const onSumbit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eg35c8q",
        "template_h1ib1t5",
        e.target,
        "user_s8506rcfJ1NXwiPZmILT8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailOK(true);
          setTimeout(() => {
            setEmailOK(false);
          }, 5000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us |First Choice Properties</title>
        <meta
          charSet="utf-8"
          name="Contact us |First Choice Properties"
          content="Unsure about any details, or want to purchase and sell a property through us? Contact us below!"
        />
      </Helmet>
      <Navbar />
      <Container>
        <AboutUsWrapper>
          <LPContentWrapper ref={landingPage}>
            <LPContentL>
              <AboutUsTitle fontSize="4rem" color="#545454 ">
                Have an <Span>Enquiry?</Span>
              </AboutUsTitle>
              <H4 color="#494949">
                Unsure about any details, or want to purchase and sell a
                property through us? Contact us below!
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
                <LPImage src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80" />
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
              <Form onSubmit={onSumbit}>
                <NameInputWrapper>
                  <InputWrapper>
                    <H3>First name</H3>
                    <Input
                      placeholder="Enter First Name"
                      autoComplete="none"
                      required="true"
                      name="FirstName"
                    />
                  </InputWrapper>

                  <InputWrapper>
                    <H3>Last name</H3>
                    <Input
                      placeholder="Enter Last Name"
                      autoComplete="none"
                      required="true"
                      name="LastName"
                    />
                  </InputWrapper>
                </NameInputWrapper>
                <InputWrapper>
                  <H3>Email Address</H3>
                  <Input
                    placeholder="Enter Email Address"
                    autoComplete="none"
                    required="true"
                    name="EmailAddress"
                  />
                </InputWrapper>

                <InputWrapper>
                  <H3>Message</H3>
                  <TextArea
                    placeholder="Enter Message"
                    height="80px"
                    autoComplete="none"
                    required="true"
                    name="Message"
                  />
                </InputWrapper>
                <H3 color="green">
                  {emailOK ? "Your message has been sent!" : ""}
                </H3>
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
