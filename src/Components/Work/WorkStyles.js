import styled from "styled-components";
import {
  Media_Query_Large,
  Media_Query_Desktops,
  Media_Query_Tables,
  Media_Query_Phones,
} from "../../RwdStyles";

export const Container = styled.div`
  background: linear-gradient(#e5e5e5, #ffffff);
`;

export const Wrapper = styled.div`
  background-color: #26c6d0;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;

export const TopContainer = styled.div`
  padding-top: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopTitle = styled.h3`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 3.63636px;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
  position: relative;
  &::before {
    content: "aaaaaaaaaaaaaaa";
    position: absolute;
    left: -12px;
    top: 8.7px;
    font-size: 2.5rem;
    text-decoration-style: wavy;
    text-decoration-color: #585880;
    text-decoration-line: underline;
    color: transparent;
  }
`;

export const TopText = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  width: 1007px;
  text-align: center;
  letter-spacing: 1px;
  margin: 65px 0 30px 0;
  color: #ffffff;
  ${Media_Query_Desktops} {
    width: 100%;
  }
`;

export const TopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #585880;
  margin-top: 30px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
  margin-bottom: 25px;
  width: 294px;
  height: 92px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1200px;
  margin: auto;

  ${Media_Query_Large} {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
`;

export const ContentIcon = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background-color: #ffffff;
  position: relative;
`;

export const Icon = styled.img``;

export const ContentTitle = styled.h4`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const ContentText = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  margin: 15px 0 20px 0;
`;

export const ContentButton = styled.button`
  background-color: #26c6d0;
  border: 2px solid #ffffff;
  border-radius: 30px;
  padding: 15px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.22222px;
  color: #ffffff;
`;

export const LastTextContainer = styled.div`
  margin: 100px 0 130px 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const LastText = styled.h4`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(
    transparent 40%,
    rgba(255, 255, 255, 0) 55%,
    #ffbc58 20%,
    #ffbc58 90%,
    transparent 95%
  );
`;

export const FloatContainer = styled.div`
  height: 622px;
  width: 1350px;
  position: absolute;
  background: linear-gradient(0deg, rgba(7, 7, 7, 1), rgba(7, 8, 8, 1));
  border-bottom-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;

  ${Media_Query_Large} {
    width: 100%;
  }

  &::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("https://images.pexels.com/photos/3874719/pexels-photo-3874719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
      center / cover no-repeat;
    border-bottom-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    filter: blur(8px) opacity(50%);
  }
`;

export const FloatWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  ${Media_Query_Desktops} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const LeftContainer = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeftImg = styled.div`
  width: 204px;
  height: 204px;
  border-radius: 50%;
  background-color: #ffffff;
  background: url("https://storage.zoominfo.com/2306822271");
`;

export const LeftTitle = styled.h4`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 50px 0 20px 0;
  ${Media_Query_Phones} {
    margin: 10px 0 10px 0;
  }
`;

export const LeftText = styled.p`
  font-family: Proxima Nova;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #ffffff;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 734px;
  ${Media_Query_Tables} {
    width: 100%;
  }
`;

export const RightImg = styled.img`
  width: 60px;
  margin: 100px 0 30px 0;
  ${Media_Query_Desktops} {
    display: none;
  }
`;

export const RightText = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 48px;
  letter-spacing: 2px;
  color: #ffffff;
  padding-top: 30px;
  ${Media_Query_Phones} {
    padding-top: 0px;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;

export const RightTextSpan = styled.span`
  color: orange;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 48px;
  letter-spacing: 2px;
  ${Media_Query_Phones} {
    font-size: 16px;
    letter-spacing: 1px;
  }
`;
