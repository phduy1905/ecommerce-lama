import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
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
  width: 40%;
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
  flex-wrap: wrap;
  margin-bottom: 25px;
`;
export const Input = styled.input`
  width: 40%;
  padding: 10px;
  margin: 0 15px 20px 0;
  font-size: 16px;
`;
export const Agreement = styled.p`
  font-size: 14px;
  margin-bottom: 25px;
`;
export const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 15px 40px;
  font-size: 18px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`;
