import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { sliderItems } from "../data";



const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;

`
const Arrow = styled.div`
height: 50px;
width: 50px;
background-color: #fff7f7;
border-radius: 50%;
background-color: #fff7f7;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.slideIndex * -100}vw   );
`
const Slide = styled.div`
display: flex;
align-items: center;
height: 100vh;
width: 100vw;
`
const Image = styled.img`
height: 80%;
background: none;
`

const ImgContainer = styled.div`
flex: 1;
position: relative;
overflow: hidden;
height: 100%;
`
const InfoContainer = styled.div`
flex: 1;
`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0px ;
font-size: 20px;
font-weight: 500;
letter-spacing: 1px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState()

    const handleClick = (direction) => {
if(direction ==="left"){
    setSlideIndex(slideIndex > 0 ?slideIndex-1 :2)
}
else{ 
    setSlideIndex(slideIndex <2 ? slideIndex+1 : 0)
}

     }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosNewIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item, index) => (

                    <Slide key={index} bg={item.bg}>

                        <ImgContainer>
                            <Image src={item.Image} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc} </Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>

                ))}
            </Wrapper>


            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosIcon />
            </Arrow>


        </Container>
    );
}

export default Slider;
