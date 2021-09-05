import styled from "styled-components";
import { mobile } from "../../responsive";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export { Container };
