import './App.css';
import Counter from './components/Counter';
import CounterState from './components/Counter2';
import CounterReducer from './components/CounterReducer';
import ProductReducer from './components/ProductReducer';
import ProductState from './components/ProductState';
import ToDo from './components/TodoList';

function App() {
  return (
    <>
      <Counter/>
      <hr></hr>
      <CounterState/>
      <hr></hr>
      <CounterReducer/>
      <hr></hr>
      <ProductState/>
      <hr></hr>
      <ProductReducer/>
      <hr></hr>
      <ToDo/>
    </>
  );
}

export default App;
