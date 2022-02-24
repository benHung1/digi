import styled from "styled-components";
import {
  Media_Query_Book,
  Media_Query_Desktops,
  Media_Query_Phones,
  Media_Query_Tables,
} from "../../RwdStyles";
import { VscCircleFilled } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";

export const Container = styled.div`
  height: 100vh;
  background-color: #e5e5e5;
`;

export const Wrapper = styled.div`
  height: 100%;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;

export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  object-fit: cover;
  height: 100%;
  overflow: hidden;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 41px;
  position: relative;
  ${Media_Query_Phones} {
    margin-bottom: 100px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #4ee5ea 3.94%, #26d0a8 94.73%);
  border-radius: 24px;
  width: 200px;
  height: 41.03px;
  border: none;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1.14286px;
  color: #ffffff;
`;

export const Icon = styled.div`
  margin: 0px 60px 0px 44px;
  cursor: pointer;
`;

export const Aside = styled.div`
  position: relative;
  top: calc(50% - 19px / 2 - 97px);
  ${Media_Query_Tables} {
    display: none;
  }
`;

export const AsideText = styled.h4`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
  position: absolute;
  transform: rotate(-90deg);
  &::before {
    content: "";
    border-bottom: 2px solid #ffffff;
    position: absolute;
    bottom: 50%;
    right: 100%;
    width: 113px;
    margin-right: 25px;
  }
`;

export const MiddleContainer = styled.div`
  position: relative;
`;

export const MiddleWrapper = styled.div`
  margin-top: 145px;
  margin-left: 265px;
  ${Media_Query_Tables} {
    margin: 0;
  }
`;

export const Logo = styled.img``;

export const Title = styled.h4`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 70px;
  letter-spacing: 9.16667px;
  color: #ffffff;
  margin-top: 70px;
`;

export const Circle = styled(VscCircleFilled)`
  ${Media_Query_Phones} {
    display: none;
  }
`;

export const Span = styled.span`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 70px;
  letter-spacing: 9.16667px;
  color: #ffffff;
  background: linear-gradient(
    transparent 40%,
    rgba(255, 255, 255, 0) 70%,
    #26c6d0 20%,
    #26c6d0 90%,
    transparent 95%
  );
  ${Media_Query_Phones} {
    letter-spacing: 0;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -100%);
`;

export const BottomImg = styled.div`
  border-radius: 50%;
  width: 65px;
  height: 65px;
  background-color: #ffffff;
  background: url("https://images.pexels.com/photos/3625373/pexels-photo-3625373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
    no-repeat center / cover;
`;

export const BottomText = styled.p`
  margin: 11px 0 30px 0;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const BottomLine = styled.div`
  width: 1px;
  height: 44px;
  background-color: #ffffff;
`;

export const SideMenu = styled.div`
  background: linear-gradient(180deg, #585880 3.61%, #26c6d0 95.7%);
  mix-blend-mode: normal;
  opacity: 0.9;
  height: 100vh;
  width: 100%;
  position: absolute;
  border-radius: 0 0 60px 60px;
  z-index: 99;
  visibility: ${({ nav }) => (nav ? "hidden" : "visible")};
`;

export const SideBg = styled.div``;

export const SideNav = styled.div`
  display: flex;
  padding-top: 48px;
  justify-content: space-between;
`;

export const SideNavLogo = styled.img`
  width: 140px;
  margin-left: 60px;
`;

export const SideNavIcon = styled(AiOutlineClose)`
  margin-right: 60px;
  cursor: pointer;
`;

export const SideWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  ${Media_Query_Book} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const SideLeft = styled.div``;

export const SideMiddle = styled.div``;

export const SideRight = styled.div``;

export const SideCard1 = styled.div`
  width: 407px;
  height: 229px;
  background-color: #26c6d0;
  border-radius: 30px;
  mix-blend-mode: normal;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${Media_Query_Desktops} {
    width: 100%;
    height: 100%;
  }

  &::before {
    content: "";
    opacity: 0.08;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("https://cdn.pixabay.com/photo/2017/02/15/20/22/animal-2069714_960_720.png")
      no-repeat center / contain;
  }
`;

export const SideCard2 = styled.div`
  width: 568px;
  height: 348px;
  background: rgba(238, 108, 138, 0.8);
  border-radius: 30px;
  margin-top: 30px;
  mix-blend-mode: normal;
  position: relative;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  ${Media_Query_Desktops} {
    width: 100%;
    height: 100%;
  }
  &::before {
    content: "";
    opacity: 0.06;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("https://cdn.pixabay.com/photo/2017/02/25/23/50/animal-2099057__340.png")
      no-repeat center / contain;
  }
`;

export const SideCard3 = styled.div`
  width: 290px;
  height: 430px;
  background-color: #e6a94e;
  border-radius: 30px;
  mix-blend-mode: normal;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  cursor: pointer;

  ${Media_Query_Desktops} {
    width: 100%;
    height: 100%;
  }

  &::before {
    content: "";
    opacity: 0.1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("https://cdn.pixabay.com/photo/2016/11/26/19/29/angel-1861486__340.png")
      no-repeat center / contain;
  }
`;

export const SideCard4 = styled.div`
  cursor: pointer;

  width: 290px;
  height: 282px;
  background-color: #26d0a8;
  border-radius: 30px;
  margin-top: 30px;
  mix-blend-mode: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  ${Media_Query_Desktops} {
    width: 100%;
    height: 100%;
  }

  &::before {
    content: "";
    opacity: 0.08;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("https://cdn.pixabay.com/photo/2017/02/15/20/22/animal-2069717__340.png")
      no-repeat center / contain;
  }
`;

export const SideCard5 = styled.div`
  cursor: pointer;

  width: 380px;
  height: 320px;
  background-color: #585880;
  border-radius: 30px;
  mix-blend-mode: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  ${Media_Query_Desktops} {
    width: 100%;
    height: 100%;
  }

  &::before {
    content: "";
    opacity: 0.1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("https://cdn.pixabay.com/photo/2016/11/19/00/40/owl-1837497__340.png")
      no-repeat center / contain;
  }
`;

export const SideCard6 = styled.div`
  cursor: pointer;

  width: 380px;
  height: 210px;
  background-color: #ffffff;
  border-radius: 30px;
  margin-top: 30px;
  opacity: 0.95;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Media_Query_Desktops} {
    width: 100%;
    height: 100%;
    background-color: gray;
  }
`;

export const CardTextWrapper = styled.div``;

export const CardIcon = styled(BsSnapchat)``;

export const CardText = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.8px;
  padding: 9px 0;
  color: ${({ inverse }) => (inverse ? "#262626" : "#ffffff")};
`;

export const CardTitle = styled.h4`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 3.63636px;
  color: ${({ inverse }) => (inverse ? " #26C6D0" : "#ffffff")};
  display: flex;
  align-items: flex-end;
`;
