import styled from "styled-components";
import { HiMenuAlt3 } from "react-icons/hi";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  overflow: hidden;
`;

export const VideoContainer = styled.div`
  position: absolute;
  height: 100%;
`;

export const BgVideo = styled.video`
  height: auto;
  width: 100vw;
`;

export const Nav = styled.div`
  position: relative;
  left: 76.81%;
  right: 9.31%;
  top: 41px;
  bottom: 92%;
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 1.14286px;
  color: #ffffff;
  background: linear-gradient(90deg, #4ee5ea 3.94%, #26d0a8 94.73%);
  border-radius: 24px;
  padding: 10px;
  border: none;
  width: 200px;
  height: 41.03px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled(HiMenuAlt3)`
  color: black;
  position: absolute;
  left: 16.94%;
  color: #ffffff;
`;

export const AsideContainer = styled.div`
  position: absolute;
  height: 19px;
  left: 4.34%;
  right: 84.76%;
  top: calc(50% - 19px / 2 - 97px);
  transform: rotate(-90deg);
`;

export const AsideLine = styled.div`
  border: 2px solid #ffffff;
  width: 113px;
  position: absolute;
  left: -64.93%;
  right: 94.93%;
  top: 42%;
  bottom: 46.98%;
`;

export const AsideText = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
`;

export const CenterImgWrapper = styled.img`
  position: absolute;
  left: 15.28%;
  top: 18.5%;
  bottom: 78.92%;
`;

export const CenterTextWrapper = styled.div`
  position: absolute;
  height: 210px;
  left: 15.28%;
  right: 6.61%;
  top: calc(50% - 210px / 2);
`;

export const CenterText = styled.h3`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 70px;
  letter-spacing: 9.16667px;
  color: #ffffff;
`;

export const CenterSpan = styled.span`
  background: linear-gradient(
    transparent 20%,
    rgba(255, 255, 255, 0) 60%,
    #26c6d0 80%,
    transparent 95%
  );
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 70px;
  letter-spacing: 9.16667px;
  color: #ffffff;
`;

export const BottomContainer = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomDiv = styled.div`
  border-radius: 50%;
  width: 65px;
  height: 65px;
  background: #ffffff
    url("https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
    no-repeat center / 100%;
`;

export const BottomText = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 15px 0;
`;

export const BottomLine = styled.div`
  position: absolute;
  top: 128%;
  border: 1px solid #ffffff;
  height: 44px;
`;
