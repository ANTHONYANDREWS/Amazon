import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from '../axios';
import {useCookies} from "react-cookie"


function Navbar({email, setEmail, password, setPassword, basket, setBasket}) {


  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const signOut = () => {   

        localStorage.removeItem("user");
        
          navigate("/login");
          window.location.reload()
        }
      

       
  return (
    <Container>
      <Inner>

        <Logo onClick={()=> navigate("/")}>
            <img src="./amazon_logo1.png" alt="" />
        </Logo>
        <SearchBar>
            <input type="text" placeholder='Search...'/>
            <SearchIcon onClick={()=> navigate('/addProduct')}>
                <img src="./searchIcon.png" alt="" />
            </SearchIcon>
        </SearchBar>

        <RightContainer>

        <NavButton
          onClick={user ? (e) => signOut() : () => navigate("/login")}
        >
            <p>Hello,</p>
            <p>{user ? user?.fullName : "Guest"}</p>
        </NavButton>
        <NavButton onClick= {user ? ()=> navigate("/orders") : ()=> navigate("/login")}>
              <p>Return</p>
              <p>& Orders</p>
        </NavButton>
        <BasketButton onClick={user ? ()=> navigate("/checkout") : ()=> navigate("/login")}>
        {/* <BasketButton onClick={()=> navigate("/checkout")}> */}

             <img src="./basket-icon.png" alt="" />
             <p>{user ? basket.length : 0}</p>
        </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchbar onClick={()=> navigate('/addProduct')}>
            <input type="text" placeholder='Search...'/>
            <SearchIcon>
                <img src="./searchIcon.png" alt="" />
            </SearchIcon>
        </MobileSearchbar>
    </Container>
  )
}


const Container = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 767px) {
    height: 150px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 110px;
    margin-top: 10px;
  }
`;
const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 25px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder {
      padding-left: 5px;
    }
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileSearchbar = styled.div`
  height: 55px;
  width: 90%;
  display: flex;
  align-items: center;
  padding-bottom: 1px;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder {
      padding-left: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
  `;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  line-height:3px;
  p {
    &:nth-child(1) {
      font-size: 12px;
      margin-top:12px;

    }
    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  img {
    width: 30px;
    margin-right: 10px;
  }
  p {
    color: #fff;
    font-weight: 500;
  }
`;
export default Navbar
