import React from "react";
import "./BrandStyles";
import { Container, Img, Text, Title, TWrapper } from "./BrandStyles";
import { VscCircleFilled } from "react-icons/vsc";

import img from "../../Video/2022-02-22 005642.png";
import { brandData } from "../../data/brandData";

const Brand = () => {
  return (
    <Container>
      <TWrapper>
        <Title>
          {brandData.title}
          <VscCircleFilled size={20} color="#EE6C8A" />
        </Title>
        <Text>{brandData.text}</Text>
      </TWrapper>
      <Img src={img} />
    </Container>
  );
};

export default Brand;
