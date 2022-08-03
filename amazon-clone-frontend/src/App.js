import React, {useState} from 'react'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Address from './Components/Address';
import Payment from './Components/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import AddProduct from "./Components/AddProduct";
import Orders from './Components/Orders';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useCookies } from 'react-cookie';


const promise = loadStripe(
  "pk_test_51LJihTSIKiILK40Qxp91gJ8iumAwMW91VhqwzcEpfhUkL4Gxio3k3IDqOoYN4dSJuyKQjA9uL43hsHGTaKYKeVo200SX5VVQit"
)

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [basket, setBasket] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
        phone: '',
        flat: '',
        area:'',
        landmark: '',
        city: '',
        state: '',
        })
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // console.log("basket>>>>>>>>", basket)
  
  return (
    <Router>
      <Navbar email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}
          basket={basket} setBasket={setBasket}/>
      <Container>
        <Routes>
           <Route path='/' element={<Home basket={basket} setBasket={setBasket}/>}
          />
          <Route path='/signup' 
          element={<SignUp 
            fullName={fullName} setFullName={setFullName}
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}  
            />}
          />
          <Route path='/login' 
          element={<Login 
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}      
          />}
          />
          
          <Route path='/checkout' element={<Checkout basket={basket} setBasket={setBasket}/>}
          />
          <Route path='/address' element={<Address basket={basket} setBasket={setBasket} formData={formData} setFormData={setFormData}/>}
          />
           <Route path='/payment' 
          element={<Elements stripe= {promise}><Payment 
          basket={basket} setBasket={setBasket} 
          formData={formData} setFormData={setFormData}
          email={email} setEmail={setEmail}
          /></Elements>}
          />

           <Route path='/addProduct' element={<AddProduct basket={basket} setBasket={setBasket}/>}
          />

           <Route path='/orders' element={<Orders basket={basket} setBasket={setBasket}/>}
          />
        </Routes>
      </Container>
      <Footer/>
    </Router>
    
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;


export default App;
