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
  ImgContainer,
} from "./AboutStyles";
import { VscCircleFilled } from "react-icons/vsc";
import SaladVideo from "../../Video/DigiSalad.mp4";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import Img from "../../Video/e2d780_5ffb3b6f704c4503a54572866ff325d0_mv2 (1).png";
import { aboutData } from "../../data/aboutData";

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
          {aboutData.title}
          <VscCircleFilled size={20} color="#EE6C8A" />
        </Title>
      </TitleContainer>
      <VideoContainer>
        <Video
          muted
          ref={vidRef}
          poster="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        >
          <source src={SaladVideo} type="video/mp4" />
        </Video>
        <VideoButton onClick={handleVideo}>
          {playVideo ? (
            <BsPauseCircleFill color="#26C6D0" size={112} />
          ) : (
            <BsPlayCircleFill color="#26C6D0" size={112} />
          )}
        </VideoButton>
      </VideoContainer>
      <TextContainer>
        <Text>{aboutData.description}</Text>
      </TextContainer>
      <Button>
        {aboutData.button}
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
            {aboutData.leftTitle}
            <VscCircleFilled size={20} color="#EE6C8A" />
          </LeftTitle>
          <LeftText>{aboutData.leftText}</LeftText>
        </LeftContainer>
        <RightContainer>
          <ImgContainer>
            <RightImg src={Img} />
            <RightImg src={Img} />
          </ImgContainer>
          <ImgContainer>
            <RightImg src={Img} />
            <RightImg src={Img} />
          </ImgContainer>
        </RightContainer>
      </FloatContainer>
    </Container>
  );
};

export default About;
