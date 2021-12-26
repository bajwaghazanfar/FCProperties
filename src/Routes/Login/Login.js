import {
  Container,
  RightGrid,
  Form,
  InputWrapper,
  LeftGrid,
  RightGridImg,
  Input,
  FormButtonWrapper,
  H1,
  H3,
  SubmitBtn,
  ImgContainer,
  ImgContainerAfter,
  Img,
  Logo,
  LeftGridWrapper,
} from "./StyledComponents/LoginComponents";
import wallpaper from "./StyledComponents/assets/wallpaper1.jpg";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useRef } from "react";
import { useEffect } from "react";
import { imageRevealAnimation, loginFormAnimation } from "./animations";
import logo from "../../assets/logo/color1.png";

const Login = () => {
  const image = useRef(null);
  const imageReveal = useRef(null);
  const form = useRef(null);

  useEffect(() => {
    imageRevealAnimation(image, imageReveal);
    loginFormAnimation(form);
  });
  return (
    <Container>
      <LeftGrid>
        <Logo src={logo} />
        <LeftGridWrapper>
          <Form ref={form}>
            <H1>Login</H1>
            <InputWrapper>
              <MailOutlineIcon />
              <Input placeholder="Enter your email address" />
            </InputWrapper>
            <InputWrapper>
              <LockOutlinedIcon />
              <Input placeholder="Enter your password" />
            </InputWrapper>
            <FormButtonWrapper>
              <a>
                <H3>Forgot your password?</H3>
              </a>

              <SubmitBtn>
                <H3 style={{ color: "white" }}>Login</H3>
              </SubmitBtn>
            </FormButtonWrapper>
          </Form>
        </LeftGridWrapper>
      </LeftGrid>
      <RightGrid>
        <ImgContainer>
          <Img src="https://wallpaperaccess.com/full/3885505.jpg" ref={image} />
          <ImgContainerAfter ref={imageReveal} />
        </ImgContainer>
      </RightGrid>
    </Container>
  );
};
export default Login;
