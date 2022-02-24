import React from "react";
import { useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

import "./SliderStyles";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  InfoContainer,
  Title,
  Desc,
  Button,
  Text,
  Span,
  Img,
  Control,
  ControlText,
  ControlText2,
  ControlLine,
} from "./SliderStyles";
import { VscCircleFilled } from "react-icons/vsc";
import { sliderItems } from "../../data/sliderData";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container id="careers">
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <Img src={item.img} />
              <Button>
                {item.button}
                <div
                  style={{
                    borderTop: "1px solid white",
                    width: "70px",
                    margin: "0 10px",
                  }}
                />
              </Button>
            </ImageContainer>
            <InfoContainer>
              <Text>{item.text}</Text>
              <Title>
                <Span>{item.title}</Span>
                <VscCircleFilled size={20} color="#EE6C8A" />
              </Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
            <Control>
              <ControlText>{item.number}</ControlText>
              <ControlLine></ControlLine>
              <ControlText2>04</ControlText2>
            </Control>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
