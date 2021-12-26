import styled from "styled-components";
import colorlogo from "../assets/colorlogo.png";
export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: #424949;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const LogoWrapper = styled.div`
  width: 200px;
  height: 100%;
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const LinksWrapper = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Link = styled.h3`
  font-size: 18px;
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : "400")};
  letter-spacing: 0px;
  color: ${(props) => (props.color ? `${props.color}` : "white")};
`;

export const AlternateNavbar = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={colorlogo} />
      </LogoWrapper>
      <LinksWrapper>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Buying</Link>
      </LinksWrapper>
    </Container>
  );
};
