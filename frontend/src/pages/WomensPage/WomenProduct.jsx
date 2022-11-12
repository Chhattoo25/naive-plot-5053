import React from 'react'
import styled from 'styled-components';
import { FilterDiv } from '../../components/MenWomenProducts/FilterDiv'
import WomenData from '../../components/MenWomenProducts/WomenData'

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

const WomenProduct = () => {
  return (
    <div>
<Wrapper>
        <Left>
          <FilterDiv />
        </Left>
        <Right>
          <WomenData />
        </Right>
      </Wrapper>

    </div>
  )
}

export default WomenProduct