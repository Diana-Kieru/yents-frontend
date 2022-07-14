import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components';

const Container = styled.div`
   background-color: #053330;
   color: #f0ffff;
   
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   padding: 3.125rem;
   height: 75vh;
   
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
  opacity: 0.6;
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
  &:hover {
    color: #fff;
    font-weight:600;
    
  }
`;


const Right = styled.div`
    flex: 1
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image =  styled.img`
  max-width: 100%;
  object-fit: cover;
  margin-left: 10px;
`;

const vector = require ('../components/assets/vector.jpg')

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
      <ImageContainer>
      <Image src={vector} alt='Logo'/>
      </ImageContainer>
      </Right>
    </Wrapper>
   </Container>
  )
}

export default LandingPage;