import styled from "styled-components";

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
  border: 1px solid gray;
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
  text-decoration: 3px #26c6d0 wavy underline;
`;

export const VideoContainer = styled.div`
  width: 960px;
  height: 544px;
  position: relative;
`;

export const Video = styled.video`
  max-width: 100%;
`;

export const VideoButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const TextContainer = styled.div`
  width: 1007px;
  margin-top: 30px;
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
  padding: 15px;
  margin-top: 30px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
  margin-bottom: 250px;
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
  top: 85%;
  left: 10%;
`;

export const LeftContainer = styled.div`
  flex: 1;
  padding: 0px 90px;
`;

export const LeftTitle = styled.h3`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 3.63636px;
  color: #262626;
  text-decoration: 3px #26c6d0 wavy underline;
  padding: 50px 0;
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
`;

export const RightContainer = styled.div`
  flex: 1;
  display: block;
  margin: auto;
`;

export const RightImg = styled.img`
  width: 300px;
`;
