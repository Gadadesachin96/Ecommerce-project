import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
height: 60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
padding: 5px;
align-items: center;
margin-left: 25px;
`

const Input = styled.input`
border: none;
`
const Logo = styled.h1`
font-weight: bold;
text-align: center;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENGLISH</Language>
          <SearchContainer>
            <input />
            <SearchIcon style={{color:'gray', fontSize:'16px'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>GINGER</Logo>
        </Center>
        <Right>
          <MenuItem>
            REGISTER
          </MenuItem>
          <MenuItem>
            SIGN-IN
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  );
}

export default Navbar;
