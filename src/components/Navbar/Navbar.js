import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 3.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`;

const Wrapper = styled.div`
   padding: 1rem 2rem;
   display: flex;
   aligh-items: center;
   justify-content: space-evenly;
   width: 50%;
   box-sizing: border-box;
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
  display:flex;
  align-items: center;
  margin-right: 1rem;
  &:hover {
    font-color: #fff;
    font-weight:600;
    
  }
`;

const Button = styled.button`
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background-color: #f0ffff;
  color: #053330;
  &:hover {
    background-color: #fff;
    font-weight:600;
    
  }
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem> Whitepaper </MenuItem>
        <MenuItem> Roadmap </MenuItem>
        <MenuItem> Team </MenuItem>
        <MenuItem> Contact us </MenuItem>
        <Link to='signup'><Button>Sign up</Button></Link>     
      </Wrapper>
    </Container>
    
  )
}

export default Navbar