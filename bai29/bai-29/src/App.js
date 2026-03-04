import './App.css';
import Country from './components/Country';
import Login from './components/login';
import Menu from './components/menu';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Login/>
      <Menu/>
      <ProductList/>
      <Country/>
    </>
  );
}

export default App;
