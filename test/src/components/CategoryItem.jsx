import React from 'react';
import styled from 'styled-components';

const Container  = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
overflow: hidden;
cursor: pointer;
position: relative;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
transition: transform 0.3s ease;
&:hover {
    transform: scale(1.1);
  }
`
const Title = styled.h1`
color: white;
padding: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: black;
font-weight: 500;

cursor: pointer;

`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
