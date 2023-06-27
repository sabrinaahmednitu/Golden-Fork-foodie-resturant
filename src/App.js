import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import ConfirmDelivery from './Pages/Home/ConfirmDelivery/ConfirmDelivery';
import Signup from './Pages/Signup/Signup';
import FoodDetail from './Pages/Home/FoodDetail/FoodDetail';
import Lunchs from './Pages/Home/FoodForDay/Lunch/Lunchs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/placeorder"
          element={<ConfirmDelivery></ConfirmDelivery>}
        ></Route>
        <Route path="/lunchs/:lunchsId" element={<FoodDetail></FoodDetail>}></Route>
        <Route path="/lunchs" element={<Lunchs></Lunchs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
