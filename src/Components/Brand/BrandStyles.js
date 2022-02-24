import styled from "styled-components";
import { Media_Query_Desktops, Media_Query_Phones } from "../../RwdStyles";

export const Container = styled.div`
  margin-top: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
`;

export const TWrapper = styled.div`
  width: 1007px;
  ${Media_Query_Desktops} {
    width: 100%;
  }
`;

export const Title = styled.h4`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 3.63636px;
  color: #262626;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  &::before {
    content: "aaaaaaaaaaaaaaaaaaaa";
    top: 8.7px;
    position: absolute;
    font-size: 2.5rem;
    text-decoration-style: wavy;
    text-decoration-color: #26c6d0;
    text-decoration-line: underline;
    color: transparent;
    ${Media_Query_Phones} {
      top: 30px;
      content: "aaaaaaaaaaa";
    }
  }
`;

export const Text = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #262626;
  margin: 75px 0 75px 0;
`;

export const Img = styled.img`
  width: 1040px;
  margin-bottom: 100px;
  ${Media_Query_Desktops} {
    width: 100%;
  }
`;
