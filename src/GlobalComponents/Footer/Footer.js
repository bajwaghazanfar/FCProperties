import styled from "styled-components";
import blacklogo from "./assets/blacklogo.png";
import colorlogo from "./assets/colorlogo.png";
export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #333;
`;
export const Logo = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
`;
export const AllRoutesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const Routes = styled.h3`
  font-size: 1rem;
  color: white;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
`;
export const A = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={colorlogo} />
      <AllRoutesWrapper>
        <A href="/">
          <Routes>Home</Routes>
        </A>
        <A href="/about-us">
          <Routes>About us</Routes>
        </A>
        <A href="/buying">
          <Routes>Buying</Routes>
        </A>
        <A href="/selling">
          <Routes>Selling</Routes>
        </A>
        <A href="/contact-us">
          <Routes>Contact Us</Routes>
        </A>
      </AllRoutesWrapper>
    </FooterContainer>
  );
};
