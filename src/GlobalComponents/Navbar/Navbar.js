import React, { useState, useEffect, useRef } from "react";

import blacklogo from "./assets/blacklogo.png";
import colorlogo from "./assets/colorlogo.png";
import { Button } from "@material-ui/core";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import {
  Container,
  Wrapper,
  Logo,
  ULWrapper,
  H4,
  A,
  Row1,
  Row1Section,
  Row1H4Wrapper,
  Row2,
  Row2Section,
  MobileNav,
  HamburgerMenu,
  Li,
  HamburgerWrapper,
  MobileH4,
} from "./StyledComponents/NavbarComponent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import { fadeIn, fadeOut } from "./StyledComponents/animations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFirstRow, setShowFirstRow] = useState(true);
  const [seeThrough, setSeethrough] = useState(false);
  const wrapper = useRef(null);
  useEffect(() => {
    isOpen ? fadeIn(wrapper) : fadeOut(wrapper);
  });

  return (
    <>
      <BrowserView>
        <Container>
          <Row1 show={true}>
            <Row1Section>
              <a href="/">
                <Logo src={colorlogo} />
              </a>
            </Row1Section>
            <Row1Section>
              <LocalPhoneIcon style={{ color: "#e7a93d" }} />
              <H4 color="#d5992f">07720588749</H4>
            </Row1Section>
            <Row1Section>
              <LocationOnIcon style={{ fontSize: "30px", color: "#e7a93d" }} />
              <Row1H4Wrapper>
                <H4 color="#d5992f">982 Tyburn Road, Birmingham</H4>
                <H4 color="#d5992f">07720588749</H4>
              </Row1H4Wrapper>
            </Row1Section>
            <Row1Section>
              <TwitterIcon />
              <FacebookIcon />
            </Row1Section>
          </Row1>
          <Row2>
            <Row2Section></Row2Section>
            <Row2Section>
              <A href="/">
                <H4 color="black">Home</H4>
              </A>
            </Row2Section>
            <Row2Section>
              <A href="/about-us">
                <H4 color="black">About Us</H4>
              </A>
            </Row2Section>
            <Row2Section>
              <A href="/buying">
                <H4 color="black">Buying</H4>
              </A>
            </Row2Section>
            <Row2Section>
              <A href="/selling">
                <H4 color="black">Selling</H4>
              </A>
            </Row2Section>
            <Row2Section>
              <A href="/contact-us">
                <H4 color="black">Contact us</H4>
              </A>
            </Row2Section>
          </Row2>
        </Container>
      </BrowserView>
      <MobileView>
        <MobileNav>
          <a href="/">
            <Logo src={colorlogo} />
          </a>
          <MenuIcon
            style={{ color: "white" }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileNav>
        <HamburgerMenu ref={wrapper}>
          <HamburgerWrapper>
            <Li>
              <A href="/">
                <MobileH4 color="black">Home</MobileH4>
              </A>
            </Li>
            <Li>
              <A href="/about-us">
                <MobileH4 color="black">About us</MobileH4>
              </A>
            </Li>
            <Li>
              <A href="/buying">
                <MobileH4 color="black">Buying</MobileH4>
              </A>
            </Li>
            <A href="/selling">
              <Li>
                <MobileH4 color="black">Selling</MobileH4>
              </Li>
            </A>
            <A href="contact-us">
              <Li>
                <MobileH4 color="black">Contact Us</MobileH4>
              </Li>
            </A>
          </HamburgerWrapper>
        </HamburgerMenu>
      </MobileView>
    </>
  );
};
export default Navbar;
