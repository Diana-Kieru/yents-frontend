import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components';

const Container = styled.div`
   background-color: #053330;
   color: #f0ffff;
   height: 100vh
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   padding: 3.125rem;
`;

const Left = styled.div`
    flex: 1;
    
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const Description =  styled.p`
  line-height: 1.5;
  opacity: 0.8;
  margin-bottom: 0.75rem;
`;

const Button = styled.button`
  border: none;
  padding: 0.75rem 2rem;
  background-color: transparent;
  color: #f0ffff;
  border: 1px solid white;
  margin-top: 2rem;
  cursor: pointer;
`;


const Right = styled.div`
    flex: 1
`;

const Image =  styled.img`
  height: 80%;
`;

const LandingPage = () => {
  return (
   <Container>
    <Navbar />
    <Wrapper>
      <Left>
        <Title>Young Entrepreneurs Network Tokens, YENTs</Title>
        <Description>
          It is important for networks to convert social capital through the exchange and pooling of value among the members. 
          
          
        </Description>
        <Description>
        This can best be achieved through new innovations like blockchain that allow peer-to-peer transfer value,transoarency of transactions and fragmentation of assents to micro units.
        </Description>
        <Description>
        In this backdrop we are looking towards a stablecoin for savings, credit and investments dubbed YENTS-Young Entrepreneurs Network Tokens.
        </Description>
        <Button>Learn more</Button>
      </Left>
      <Right>
      
      </Right>
    </Wrapper>
   </Container>
  )
}

export default LandingPage;