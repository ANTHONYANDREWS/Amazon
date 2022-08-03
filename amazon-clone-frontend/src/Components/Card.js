import React from 'react';
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import { useNavigate } from 'react-router-dom';


function Card({basket, setBasket, id, image, title, price, rating}) {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

    const addToBasket = () =>{
        setBasket([...basket, {id, image, title, price,rating}]);
        console.log("basket>>>>", basket)
    }
  return (
    <Container>
      <Image>
        <img src= {image} alt="" />
        </Image>
        <Description>
            <h5>{title} </h5>
            <Rating name="half-rating-read" 
            defaultValue={rating} 
            precision={0.5} readOnly />
            <p>
                ₹ {price}
            </p>
            <button onClick={user ? addToBasket :  ()=> navigate("/login")}>Add to Cart</button>
            {/* <button onClick={addToBasket}>Add to Cart</button> */}

        </Description>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
//   border: 1px solid red;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: fit-content;
    height: 170px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card
