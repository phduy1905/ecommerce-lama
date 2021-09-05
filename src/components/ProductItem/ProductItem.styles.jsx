import styled from "styled-components";

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  cursor: pointer;
`;

export const Container = styled.div`
  flex: 1;
  height: 350px;
  margin: 5px;
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f5fdfb;

  &:hover ${ButtonsContainer} {
    opacity: 1;
  }
`;

export const Img = styled.img`
  height: 80%;
`;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
