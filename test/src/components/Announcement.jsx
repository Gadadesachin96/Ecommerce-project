import styled from 'styled-components';
import React from 'react';

const Container= styled.div`
height: 30px;
background-color: teal;
color: black;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

`


const Announcement = () => {
  return (
    <Container>
      Winter is here , free shiping across all over India ! . 
    </Container>
  );
}

export default Announcement;
