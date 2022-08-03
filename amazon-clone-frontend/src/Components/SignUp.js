import React from 'react';
import styled from "styled-components";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';


function SignUp({fullName, setFullName, email, setEmail, password, setPassword}) {

  const navigate = useNavigate();


  const signup = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { email, password, fullName})
      .then((res) => {
        setFullName("");
        setEmail("");
        setPassword("");
        alert(res.data.message)
      })
      .catch((err) => console.warn(err));

    navigate("/login");
  };
       

  
  return (
  <Container>
     <Logo onClick={()=> navigate("/")}>
        <img src="./amazon_logo.png" alt="" />
      </Logo>
    <FormContainer>
        <h3>Sign-Up</h3>
    <InputContainer>
        <p>FullName</p>
        <input type="text"
            placeholder="John Smith"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
    </InputContainer>
    <InputContainer>
            <p>Email</p>
            <input type="email" 
            placeholder='example@example.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
       </InputContainer>
       <InputContainer>
            <p>Password</p>
            <input type="password" 
            placeholder='********'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
       </InputContainer>
       
    
       <SignUpButton onClick={signup}>Create Account in Amazon</SignUpButton>
    </FormContainer>


    <LoginButton 
    onClick={() => navigate("/login")}
    >
        Back to Login
      </LoginButton>
      
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 30%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
    padding: 15px;
  }
`;

const InputContainer = styled.div`
  width: 95%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    margin-top: 5px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;

const SignUpButton = styled.button`
  width: 85%;
  height: 35px;
  background-color: #dfdfdf;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

const LoginButton = styled.button`
  width: 25%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default SignUp
