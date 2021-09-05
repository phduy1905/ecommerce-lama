import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: calc(100vh - var(--navbar-height) - var(--announcement-height));
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.side === "left" && "20px"};
  right: ${(props) => props.side === "right" && "20px"};
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
export const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

export const Image = styled.img`
  height: 80%;
`;

export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;
