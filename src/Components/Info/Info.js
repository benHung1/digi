import React from "react";
import "./InfoStyles";
import {
  Container,
  Nav,
  NavButton,
  Icon,
  AsideContainer,
  AsideText,
  AsideLine,
  CenterText,
  BottomContainer,
  BottomDiv,
  BottomText,
  CenterImgWrapper,
  CenterTextWrapper,
  CenterSpan,
  BottomLine,
  VideoContainer,
  BgVideo,
} from "./InfoStyles";
import { VscCircleFilled } from "react-icons/vsc";

import Video from "../../Video/DigiSalad Website Video-v3.mp4";

const url = "https://tw.digisalad.cool/images/logo-white.png";

const Info = () => {
  return (
    <Container>
      <VideoContainer autoPlay loop muted>
        <BgVideo autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </BgVideo>
      </VideoContainer>
      <Nav>
        <NavButton>START YOUR PROJECT</NavButton>
        <Icon size={30} />
      </Nav>
      <AsideContainer>
        <AsideLine />
        <AsideText>DIGITAL AGENCY</AsideText>
      </AsideContainer>
      <CenterImgWrapper src={url} />
      <CenterTextWrapper>
        <CenterText>
          WE CREATE
          <br /> AMAZING <br /> <CenterSpan>DIGITAL EXPERIENCES</CenterSpan>
          <VscCircleFilled size={10} color="#EE6C8A" />
        </CenterText>
      </CenterTextWrapper>
      <BottomContainer>
        <BottomDiv />
        <BottomText>Taste us now!</BottomText>
        <BottomLine />
      </BottomContainer>
    </Container>
  );
};

export default Info;
