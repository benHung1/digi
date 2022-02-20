import React from "react";
import {
  Container,
  Content,
  ContentButton,
  ContentImg,
  ContentText,
  ContentTitle,
  ContentWrapper,
  TopButton,
  TopContainer,
  TopText,
  TopTitle,
} from "./WorkStyles";
import { VscCircleFilled } from "react-icons/vsc";

const Work = () => {
  return (
    <Container>
      <TopContainer>
        <TopTitle>
          OUR INGRADIENTS <VscCircleFilled size={10} color="#EE6C8A" />
        </TopTitle>
        <TopText>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </TopText>
        <TopButton>
          OUR SERVICES
          <div
            style={{
              borderTop: "1px solid white",
              width: "50px",
              margin: "0 10px",
            }}
          />
        </TopButton>
      </TopContainer>
      <Content>
        <ContentWrapper>
          <ContentImg />
          <ContentTitle>UX Design</ContentTitle>
          <ContentText>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </ContentText>
          <ContentButton>VIEW MORE</ContentButton>
        </ContentWrapper>
        <ContentWrapper>
          <ContentImg />
          <ContentTitle>UX Design</ContentTitle>
          <ContentText>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </ContentText>
          <ContentButton>VIEW MORE</ContentButton>
        </ContentWrapper>
        <ContentWrapper>
          <ContentImg />
          <ContentTitle>UX Design</ContentTitle>
          <ContentText>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </ContentText>
          <ContentButton>VIEW MORE</ContentButton>
        </ContentWrapper>
        <ContentWrapper>
          <ContentImg />
          <ContentTitle>UX Design</ContentTitle>
          <ContentText>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </ContentText>
          <ContentButton>VIEW MORE</ContentButton>
        </ContentWrapper>
      </Content>
    </Container>
  );
};

export default Work;
