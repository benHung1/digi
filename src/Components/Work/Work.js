import React from "react";
import {
  Container,
  Content,
  ContentButton,
  ContentIcon,
  ContentText,
  ContentTitle,
  ContentWrapper,
  TopButton,
  TopContainer,
  TopText,
  TopTitle,
  LastText,
  FloatContainer,
  FloatWrapper,
  LeftContainer,
  LeftImg,
  LeftTitle,
  LeftText,
  RightContainer,
  RightImg,
  RightText,
  RightTextSpan,
  LastTextContainer,
  Wrapper,
} from "./WorkStyles";
import { VscCircleFilled } from "react-icons/vsc";
import { floatcontainer, work, works } from "../../data/workData";
import quote from "../../Video/quote.png";

const Work = () => {
  return (
    <Container>
      <Wrapper>
        <TopContainer id="services">
          <TopTitle>
            {works.TopTitle}
            <VscCircleFilled size={20} color="#EE6C8A" />
          </TopTitle>
          <TopText>{works.Content}</TopText>
          <TopButton>
            {works.Button}
            <div
              style={{
                borderTop: "1px solid white",
                width: "68.6px",
                margin: "0 10px",
              }}
            />
          </TopButton>
        </TopContainer>
        <Content>
          {work.map((el, index) => (
            <ContentWrapper key={index}>
              <ContentIcon>{el.icon}</ContentIcon>
              <ContentTitle>
                <pre>{el.title}</pre>
              </ContentTitle>
              <ContentText>{el.description}</ContentText>
              <ContentButton>VIEW MORE</ContentButton>
            </ContentWrapper>
          ))}
        </Content>
        <LastTextContainer>
          <LastText>{works.LastText}</LastText>
        </LastTextContainer>
        <div
          style={{
            position: "relative",
            height: "311px",
            borderBottomRightRadius: "60px",
          }}
        >
          <FloatContainer id="insights">
            <FloatWrapper>
              <LeftContainer>
                <LeftImg />
                <LeftTitle>{floatcontainer.name}</LeftTitle>
                <LeftText> {floatcontainer.desc} </LeftText>
              </LeftContainer>
              <RightContainer id="works">
                <RightImg src={quote} />
                <RightText>
                  {floatcontainer.text}
                  <RightTextSpan>{floatcontainer.span}</RightTextSpan>
                  {floatcontainer.textend}
                </RightText>
              </RightContainer>
            </FloatWrapper>
          </FloatContainer>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Work;
