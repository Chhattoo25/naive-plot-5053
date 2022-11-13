import axios from 'axios';
import React from 'react'

const Quantity = ({item, getData}) => {
    const handleClick = (data,operation) => {
        if(operation === "inc"){
            data.qty += 1
        }
        else data.qty -= 1;
        axios.fetch(`http://localhost:8080/cart/${data.id}`, data).then(() => {
            getData();
        })
    }
  return (
    <div>
        <ButtonGroup size="sm" isAttached variant="outline">
            <Button disabled={item.qty == 1} onClick={() => handleClick(item, "dec")}>-</Button>
            <Button>{item.qty}</Button>
            <Button onClick={() => handleClick(item, "inc")}>+</Button>
        </ButtonGroup>
    </div>
  )
};

export default Quantity