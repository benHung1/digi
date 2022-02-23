import React from "react";
import {
  Container,
  Wrapper,
  NavBar,
  Button,
  Icon,
  Aside,
  AsideText,
  Logo,
  Title,
  BottomContainer,
  BottomImg,
  BottomText,
  BottomLine,
  MiddleContainer,
  MiddleWrapper,
  Span,
  BottomWrapper,
  Video,
  Circle,
} from "./InfoStyles";

import { VscCircleFilled } from "react-icons/vsc";
import BGVideo from "../../Video/DigiSalad Website Video-v3.mp4";

const url = "https://tw.digisalad.cool/images/logo-white.png";

const Info = () => {
  return (
    <Container>
      <Video autoPlay loop muted>
        <source src={BGVideo} type="video/mp4" />
      </Video>
      <Wrapper>
        <NavBar>
          <Button>START YOUR PROJECT</Button>
          <Icon size={30} color="#ffffff" />
        </NavBar>
        <Aside>
          <AsideText>DIGITAL AGENCY</AsideText>
        </Aside>
        <MiddleContainer>
          <MiddleWrapper>
            <Logo src={url} />
            <Title>
              WE CREATE
              <br /> AMAZING
              <br /> <Span>DIGITAL EXPERIENCES</Span>
              <Circle size={20} color="#ee6c8a" />
            </Title>
          </MiddleWrapper>
        </MiddleContainer>
        <BottomContainer>
          <BottomWrapper>
            <BottomImg />
            <BottomText>TASTE US NOW!</BottomText>
            <BottomLine />
          </BottomWrapper>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default Info;
