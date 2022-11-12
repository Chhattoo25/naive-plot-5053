import React from 'react'
import styled from 'styled-components';
import { FilterDiv } from '../../components/MenWomenProducts/FilterDiv'
import MensData from '../../components/MenWomenProducts/MensData'


const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 25%;
  border-right: 1px solid #f5f5f5;
`;
const Right = styled.div`
  width: 75%;
  padding-left: 10px;
`;
const MenProduct = () => {
  return (
    <div>
<Wrapper>
        <Left>
          <FilterDiv />
        </Left>
        <Right>
          <MensData />
        </Right>
      </Wrapper>

    </div>
  )
}

export default MenProduct