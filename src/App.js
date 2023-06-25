import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import ConfirmDelivery from './Pages/Home/ConfirmDelivery/ConfirmDelivery';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/pricing"
          element={<ConfirmDelivery></ConfirmDelivery>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
