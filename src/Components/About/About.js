import React, { useState } from "react";
import {
  Container,
  Title,
  TitleContainer,
  VideoContainer,
  TextContainer,
  Text,
  Button,
  TopLine,
  Video,
  VideoButton,
  FloatContainer,
  LeftContainer,
  LeftTitle,
  LeftText,
  RightContainer,
  RightImg,
} from "./AboutStyles";
import { VscCircleFilled } from "react-icons/vsc";
import SaladVideo from "../../Video/DigiSalad.mp4";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import Img from "../../Video/e2d780_5ffb3b6f704c4503a54572866ff325d0_mv2 (1).png";

const About = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <Container>
      <TopLine />
      <TitleContainer>
        <Title>
          ABOUT DIGISALAD
          <VscCircleFilled size={10} color="#EE6C8A" />
        </Title>
      </TitleContainer>
      <VideoContainer>
        <Video muted ref={vidRef}>
          <source src={SaladVideo} type="video/mp4" />
        </Video>
        <VideoButton onClick={handleVideo}>
          {playVideo ? (
            <BsPauseCircleFill size={110} color="black" />
          ) : (
            <BsPlayCircleFill size={110} color="black" />
          )}
        </VideoButton>
      </VideoContainer>
      <TextContainer>
        <Text>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </Text>
      </TextContainer>
      <Button>
        VIEW MORE
        <div
          style={{
            borderTop: "1px solid white",
            width: "50px",
            margin: "0 10px",
          }}
        />
      </Button>
      <FloatContainer>
        <LeftContainer>
          <LeftTitle>
            AWARDS <VscCircleFilled size={10} color="#EE6C8A" />
          </LeftTitle>
          <LeftText>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper
            turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
            sagittis orci. Donec id dignissim nunc.{" "}
          </LeftText>
        </LeftContainer>
        <RightContainer>
          <RightImg src={Img} />
          <RightImg src={Img} />
          <RightImg src={Img} />
          <RightImg src={Img} />
        </RightContainer>
      </FloatContainer>
    </Container>
  );
};

export default About;
