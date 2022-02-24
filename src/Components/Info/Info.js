import React, { useState } from "react";
import { Link } from "react-scroll";
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
  SideMenu,
  SideNav,
  SideNavLogo,
  SideNavIcon,
  SideWrapper,
  SideCard1,
  SideCard2,
  SideCard3,
  SideCard4,
  SideCard5,
  SideCard6,
  CardIcon,
  CardText,
  CardTitle,
  SideLeft,
  SideMiddle,
  SideRight,
  CardTextWrapper,
  SideBg,
} from "./InfoStyles";
import { HiMenuAlt3 } from "react-icons/hi";

import BGVideo from "../../Video/DigiSalad Website Video-v3.mp4";
import { VscCircleFilled } from "react-icons/vsc";

const url = "https://tw.digisalad.cool/images/logo-white.png";

const Info = () => {
  const [nav, setNav] = useState(true);

  return (
    <>
      <Container>
        <SideMenu nav={nav} onClick={() => setNav(!nav)}>
          <SideBg />
          <SideNav>
            <SideNavLogo src={url} />
            <SideNavIcon color="#ffffff" size={22} />
          </SideNav>
          <SideWrapper>
            <SideLeft>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <SideCard1>
                  <CardIcon
                    size={42}
                    color="#38B038"
                    style={{ margin: "0 27px 0 37px" }}
                  />
                  <CardTextWrapper>
                    <CardText>EMPOWERING BRANDS</CardText>
                    <CardTitle>
                      ABOUT US <VscCircleFilled size={20} color="#EE6C8A" />
                    </CardTitle>
                  </CardTextWrapper>
                </SideCard1>
              </Link>
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <SideCard2>
                  <CardIcon
                    size={42}
                    color="black"
                    style={{ margin: "0 0 70px 30px" }}
                  />
                  <CardTextWrapper style={{ margin: "0 0 60px 20px" }}>
                    <CardText>CASE STUDIES</CardText>
                    <CardTitle>
                      WORKS <VscCircleFilled size={20} color="#26C6D0" />
                    </CardTitle>
                  </CardTextWrapper>
                </SideCard2>
              </Link>
            </SideLeft>
            <SideMiddle>
              <Link
                to="careers"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <SideCard3>
                  <CardTextWrapper style={{ margin: "0 0 48px 37px" }}>
                    <CardIcon size={42} color="#ffffff" />
                    <CardText>BE COOL WITH US</CardText>
                    <CardTitle>
                      CAREERS <VscCircleFilled size={20} color="#EE6C8A" />
                    </CardTitle>
                  </CardTextWrapper>
                </SideCard3>
              </Link>

              <Link
                to="insights"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <SideCard4>
                  <CardTextWrapper style={{ margin: "0 0 48px 31px" }}>
                    <CardIcon size={42} color="red" />
                    <CardText>OUR STRATEGIES</CardText>
                    <CardTitle>
                      INSIGHTS <VscCircleFilled size={20} color="#EE6C8A" />
                    </CardTitle>
                  </CardTextWrapper>
                </SideCard4>
              </Link>
            </SideMiddle>
            <SideRight>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <SideCard5>
                  <CardTextWrapper style={{ margin: "0 0 48px 42px" }}>
                    <CardIcon size={42} color="blue" />
                    <CardText>AREAS OF EXPERTISE</CardText>
                    <CardTitle>
                      SERVICES <VscCircleFilled size={20} color="#EE6C8A" />
                    </CardTitle>
                  </CardTextWrapper>
                </SideCard5>
              </Link>
              <SideCard6>
                <CardTextWrapper>
                  <CardText inverse>START YOUR JOURNEY WITH US</CardText>
                  <CardTitle inverse>
                    CONTACT <VscCircleFilled size={20} color="#EE6C8A" />
                  </CardTitle>
                </CardTextWrapper>
              </SideCard6>
            </SideRight>
          </SideWrapper>
        </SideMenu>

        <Video autoPlay loop muted>
          <source src={BGVideo} type="video/mp4" />
        </Video>
        <Wrapper>
          <NavBar>
            <Button>START YOUR PROJECT</Button>
            <Icon nav={nav} onClick={() => setNav(!nav)}>
              <HiMenuAlt3 size={30} color="#ffffff" />
            </Icon>
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
    </>
  );
};

export default Info;
