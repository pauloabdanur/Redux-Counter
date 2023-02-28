import { useAppDispatch, useAppSelector } from './store';
import { decrement, increment } from './features/counter/counterSlice';
import { Button, ButtonWrapper, Container, Text, Title } from './App.styles';

function App() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Container>
      <Text>
        <Title>Counter:</Title>
        <Title>{counter}</Title>
      </Text>
      <ButtonWrapper>
        <Button add={false} onClick={handleDecrement}>
          -
        </Button>
        <Button add={true} onClick={handleIncrement}>
          +
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

export default App;
