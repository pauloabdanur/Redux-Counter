import styled, { keyframes } from 'styled-components';

const flip = keyframes`
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  background: linear-gradient(#121212, #212b46);
  color: #fff;
  height: 100vh;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  animation: ${flip} 0.5s;
`;

export const Title = styled.h1`
  font-size: 55px;
`;

export const Button = styled.button<{ add: boolean }>`
  border: 0;
  background-color: ${(props) => (props.add ? '#479C57' : '#C83434')};
  color: #fff;
  border-radius: 10px;
  font-size: 35px;
  font-weight: bold;
  padding: 20px 30px;
  margin: 10px 50px;
  min-height: 80px;
  min-width: 120px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  animation: ${flip} 0.5s;
`;
