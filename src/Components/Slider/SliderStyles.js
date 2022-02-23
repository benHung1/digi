import styled from "styled-components";
import {
  Media_Query_Book,
  Media_Query_Large,
  Media_Query_Phones,
} from "../../RwdStyles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  &::before {
    content: "";
    background: url("https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      no-repeat center / cover;
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(8px) drop-shadow(-50px -50px 0px black);
  }
`;

export const Arrow = styled.div`
  width: 53px;
  height: 53px;
  background-color: #26c6d0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.direction === "left" && "120px"};
  right: ${(props) => props.direction === "right" && "120px"};
  z-index: 6;
  cursor: pointer;
  color: #ffffff;
  ${Media_Query_Phones} {
    top: 40%;
    left: ${(props) => props.direction === "left" && "0px"};
    right: ${(props) => props.direction === "right" && "0px"};
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

export const Slide = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Media_Query_Book} {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 554px;
  height: 554px;
  margin-right: 62px;
  overflow: hidden;
  border-radius: 40px;
  ${Media_Query_Phones} {
    width: 100%;
    height: 100%;
    margin-right: 0px;
  }
`;

export const Img = styled.img`
  width: inherit;
  height: inherit;
`;

export const InfoContainer = styled.div`
  margin-bottom: 30px;
`;

export const Text = styled.h3`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
`;

export const Span = styled.span`
  background: linear-gradient(
    transparent 40%,
    rgba(255, 255, 255, 0) 70%,
    #26c6d0 20%,
    #26c6d0 90%,
    transparent 95%
  );
`;

export const Title = styled.h3`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 3.63636px;
  color: #ffffff;
  margin: 20px 0 40px 0;
  display: flex;
  align-items: flex-end;
`;
export const Desc = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #ffffff;
  width: 432px;
  ${Media_Query_Phones} {
    width: 100%;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #26c6d0;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
  width: 300px;
  height: 140px;
  position: absolute;
  margin-top: -70px;
  margin-left: 325px;
  ${Media_Query_Large} {
    left: 0%;
  }
  ${Media_Query_Book} {
    display: none;
  }
`;

export const Control = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 54px;
  height: 47px;
  margin-top: 130px;
  margin-right: 146px;
  display: flex;
  flex-direction: column;
`;

export const ControlText = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
`;

export const ControlText2 = styled.p`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
  justify-content: flex-end;
  display: block;
  margin-left: auto;
`;

export const ControlLine = styled.div`
  width: 100%;
  height: 2px;
  display: block;
  margin: auto;
  transform: rotate(-45deg);
  background-color: #26d6d0;
`;
