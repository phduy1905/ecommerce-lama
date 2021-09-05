import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: top;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 25%;

  ${mobile({ width: "75%" })}
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 25px;
`;
export const Form = styled.form``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 15px 20px 0;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 15px 40px;
  font-size: 18px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  display: block;
  margin-bottom: 25px;
`;

export const Link = styled.a`
  margin-right: 25px;
  font-size: 14px;
  cursor: pointer;
  color: #ccc;
  text-decoration: underline;
`;
