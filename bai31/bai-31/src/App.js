import './App.css';
import Counter from './components/Counter';
import Layout from './components/Layout';
import UseRef from './components/UseRef';
import UseRef2 from './components/UseRef2';
import UseRef3 from './components/UseRef3';
import UseRef4 from './components/UseRef4';

function App() {
  return (
    <>
      <Layout />
      <UseRef/>
      <UseRef2/>
      <hr></hr>
      <UseRef3/>
      <hr></hr>
      <UseRef4/>
      <hr></hr>
      <Counter/>
    </>
  );
}

export default App;
