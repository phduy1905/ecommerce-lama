import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* ${mobile({ height: "20vh" })} */
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 32px;
  color: white;
  margin-bottom: 15px;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: white;
  color: black;
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
`;
