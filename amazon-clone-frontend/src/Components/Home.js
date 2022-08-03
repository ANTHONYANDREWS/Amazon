import axios from '../axios';
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Card from './Card';
import Navbar from './Navbar';


function Home({basket, setBasket}) {

  const [products, setProducts] = useState("");

    useEffect(()=>{
      const fetchdata = async()=>{
        const data = await axios.get('/products/get');
        // console.log("products>>>>>>", data)
        setProducts(data);
      };
      fetchdata();
    }, []);

  return (
    <Container >
      {/* <Navbar basket={basket}/> */}
      <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
      </Banner>
      <Main>
        {
          products && 
          products?.data.map((product)=>(
        <Card 
            basket={basket} 
            setBasket={setBasket}
            id={product._id}
            image={product.imageURL}
            price={product.price}
            rating={product.rating}
            title={product.title}
            
            />
            
          ))
        }
        
        
       {/* <Card 
            id={2}
            basket={basket} 
            setBasket={setBasket}
            image={"https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY327_FMwebp_QL65_.jpg"}
            price={2500}
            rating={4.5}
            title={"Echo Dot (4th Gen, 2020 release) with clock"}
            />
        <Card 
            basket={basket} 
            setBasket={setBasket}
            id={3}
            image={"https://m.media-amazon.com/images/I/616EjvhXsDS._AC_UY327_FMwebp_QL65_.jpg"}
            price={2500}
            rating={4.5}
            title={"Echo Dot (4th Gen, 2020 release) with clock"}
            />
        <Card 
            basket={basket} 
            setBasket={setBasket}
            id={4}
            image={"https://m.media-amazon.com/images/I/51mXq6pWMYL._AC_UY327_FMwebp_QL65_.jpg"}
            price={6499}
            rating={4.5}
            title={"Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (White)"}
            /> */}
      
      </Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );
    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;
  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }
  /* Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media only screen and (min-width: 767px) {
    margin-top: -150px;
    padding: 10px 0px;
  }
`;


export default Home
