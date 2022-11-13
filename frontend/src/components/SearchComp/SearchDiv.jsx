import React from 'react'
import styled from 'styled-components'

const SearchDiv = (setSearch) => {
  return (
    <div>
<Input
 type="text"
 placeholder="Search"
 onChange = {({currentTarget:input})=>setSearch(input.value)}

/>

    </div>
  )
}

export default SearchDiv


const Input = styled.input`
height: 40px;
align-self: center;
outline: none;
border: none;
width: 400px;
border-radius: 4px;
padding-left: 5px;
font-size: 15px;
box-shadow: 4px 5px 4px 4px gray;
`