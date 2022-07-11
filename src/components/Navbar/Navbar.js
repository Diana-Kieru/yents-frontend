import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 3.75rem;
    width: 100vw;
    background-color: blue;
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
 
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
  margin-right: 1rem;
`;

const Button = styled.button``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem> Whitepaper </MenuItem>
        <MenuItem> Roadmap </MenuItem>
        <MenuItem> Team </MenuItem>
        <MenuItem> Contact us </MenuItem>
        <MenuItem> <Button>Sign up</Button></MenuItem>
      </Wrapper>
    </Container>
    // <div>
    //   <Link to='/'>
    //     <div className="logo__container">
    //         <img src="" alt="" />
    //     </div>
    //   </Link>
        
    //     <nav>
            
            
    //     </nav>
    //     <Link to="/login" style={{textDecoration: "none"}}>
    //       <button>Log in</button>
    //     </Link>
    //     <Link to="/signup" style={{textDecoration: "none"}}>
    //       <button>Sign up</button>
    //     </Link>
    // </div>
  )
}

export default Navbar