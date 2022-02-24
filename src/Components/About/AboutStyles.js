import styled from "styled-components";
import {
  Media_Query_Desktops,
  Media_Query_Large,
  Media_Query_Tables,
  Media_Query_Phones,
  Media_Query_Book,
  Media_Query_Phones_Small,
} from "../../RwdStyles";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e5e5e5;
`;

export const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 86px;
  width: 1px;
  background-color: #808080;
`;

export const TitleContainer = styled.div`
  margin-top: 126px;
  margin-bottom: 91px;
`;

export const Title = styled.h1`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 3.63636px;
  display: flex;
  align-items: flex-end;
  position: relative;
  &::before {
    content: "aaaaaaaaaaaaaaa";
    position: absolute;
    top: 8.7px;
    left: -12px;
    font-size: 2.5rem;
    text-decoration-style: wavy;
    text-decoration-color: #26c6d0;
    text-decoration-line: underline;
    color: transparent;
    ${Media_Query_Phones} {
      top: 30px;
    }
    ${Media_Query_Phones_Small} {
      content: "aaaaaaaaaaaaaa";
    }
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 960px;
  height: 544px;
  ${Media_Query_Desktops} {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const VideoButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const PauseIcon = styled(BsPauseCircleFill)`
  width: 113px;
  height: 113px;
  ${Media_Query_Book} {
    width: 80px;
    height: 80px;
  }
  ${Media_Query_Phones} {
    width: 50px;
    height: 50px;
  }
`;

export const PlayIcon = styled(BsPlayCircleFill)`
  width: 113px;
  height: 113px;
  ${Media_Query_Book} {
    width: 80px;
    height: 80px;
  }
  ${Media_Query_Phones} {
    width: 50px;
    height: 50px;
  }
`;

export const TextContainer = styled.div`
  width: 1007px;
  margin-top: 30px;
  ${Media_Query_Desktops} {
    max-width: 100%;
  }
`;

export const Text = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 1px;
  color: #262626;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #26c6d0;
  margin-top: 30px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
  margin-bottom: 250px;
  width: 223px;
  height: 86px;
`;

export const FloatContainer = styled.div`
  background-color: #ffffff;
  height: 432px;
  border-bottom-left-radius: 60px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  bottom: -18%;
  right: 0;
  width: 1346px;
  ${Media_Query_Large} {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  padding: 0px 0px 0px 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${Media_Query_Book} {
    padding: 0px 0px 0px 0px;
    text-align: center;
  }
`;

export const LeftTitle = styled.h3`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 3.63636px;
  color: #262626;
  padding: 50px 0;
  display: flex;
  align-items: flex-end;
  position: relative;
  &::before {
    content: "aaaaaaaa";
    position: absolute;
    left: -15px;
    font-size: 2.5rem;
    text-decoration-style: wavy;
    text-decoration-color: #26c6d0;
    text-decoration-line: underline;
    color: transparent;
  }
`;

export const LeftText = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #262626;
  width: 416px;

  ${Media_Query_Phones} {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${Media_Query_Tables} {
    display: none;
  }
`;

export const ImgContainer = styled.div``;

export const RightImg = styled.img`
  width: 284px;
  margin: 19px 0px 19px 37px;
`;
