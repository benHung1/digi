import styled from "styled-components";
import { HiMenuAlt3 } from "react-icons/hi";
import { Media_Query_Phones, Media_Query_Tables } from "../../RwdStyles";
import { VscCircleFilled } from "react-icons/vsc";

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

export const Icon = styled(HiMenuAlt3)`
  margin: 0px 60px 0px 44px;
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
