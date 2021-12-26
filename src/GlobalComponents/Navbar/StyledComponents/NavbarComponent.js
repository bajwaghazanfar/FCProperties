import styled from "styled-components";

export const H4 = styled.h4`
  font-size: 15px;
  color: #d5992f;
  letter-spacing: 1px;
  font-weight: 800;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%
  height: auto;
`;
export const Row1 = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  background-color: black;
`;
export const Row1H4Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;
export const Row1Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Row2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1px;
  align-items: center;
`;

export const Row2Section = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #e7a93d;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100px;
  }
`;
export const ULWrapper = styled.div`
  width: auto;
  display: flex;
  padding: 1rem;
  gap: 30px;
`;
export const UL = styled.ul`
  display: flex;
  gap: 30px;
`;
export const LI = styled.li`
  text-decoration: none;
  list-style-type: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
`;

export const DropdownBtn = styled.div`
  &:hover .Dropdown {
    background-color: lightblue;
    visibility: visible;
  }
`;
export const Dropdown = styled.div`
  position: absolute;
  background: white;
  color: black;
  width: auto;

  visibility: hidden;
  border: 1px solid grey;
  border-radius: 5px;
  text-align: left;
`;
export const DropdownContent = styled.div`
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 1rem;
  font-family: var(--NormalFont);
`;
export const MobileNav = styled.div`
  width:100%:
  height:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background: black ;
  padding:1rem;
  
`;
export const HamburgerMenu = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background: #fafafa;
  padding: 1rem;
`;
export const HamburgerWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #424949;
  border-radius: 40px;
`;
export const Li = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  text-align: center;
`;
export const A = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
`;
