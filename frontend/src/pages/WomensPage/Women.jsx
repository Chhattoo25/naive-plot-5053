import React from 'react'
import TopSlider from '../../components/Sliders/TopSlider'
import styled from 'styled-components'
import SecondSlider from '../../components/Sliders/SecondSlider'
const Women = () => {
  return (
    <MainDiv>
    <TopSlider/>
    <Heading>Featured Partners</Heading>
      <Para>
        Compare across our 500+ partner stores to find the products you want at
        the best price.
      </Para>
<SecondSlider/>
<SpecialOffer>
        <hr />
        <p>Special Offers</p>
      </SpecialOffer>
      
    </MainDiv>
  )
}

export default Women

const Heading = styled.p`
font-size: 1.8rem;
text-align: center;

`

const Para = styled.p`
  font-size: 1.3rem;
  color: #a1a1a1;
  margin-top: -10px;
  text-align: center;

`

const MainDiv = styled.div`
width: 80%;
margin: auto;
`

const SpecialOffer = styled.div`
  margin-top: 5rem;
  position: relative;
  p{
    font-size: 1.8rem;
  background-color: white;
  position: absolute;
  margin-top: -15px;
  left: 50%;
  transform: translate(-50%, -50%);
  hr{
    width: 92%;
  }
  }

`
