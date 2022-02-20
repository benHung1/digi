import styled from "styled-components";

export const Container = styled.div`
  background-color: #26c6d0;
`;

export const TopContainer = styled.div`
  padding-top: 434px;
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
  text-decoration: 3px #585880 wavy underline;
  color: #ffffff;
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
`;

export const TopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #585880;
  padding: 15px;
  margin-top: 30px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
  margin-bottom: 85px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ContentWrapper = styled.div`
  width: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ContentImg = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background-color: #ffffff;
`;

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
