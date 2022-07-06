import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";

const CartItem = ({item}) => {
 
    const [qtyy, setQty] = useState(1)
    const[total, setTotal] = useState(0)
   const [value, setValue] = useState(0)
   let arr=[]
const changePlus=()=>{
  setQty(qtyy+1)
}
// useEffect(()=>{
// setValue(item.price*qtyy)
// },[qtyy])
//setValue(item.price*qtyy)
const changeMimus=(i)=>{
  setQty(qtyy-1)
  arr.push(i)
  console.log(arr);

}
    // useEffect(()=>{
    //   const data = window.localStorage.getItem("cardItems");
    //   if (data !==null)
    //   setCards(JSON.parse(data))
    //   console.log(cards);
    //   },[])
 console.log(item);

  return (
    <div>CartItem
   
        <ul>
     <li key={item.id} className="card">
      <div className='product__inner'>
      <p>{item.title}</p>
      <img src={item.imageURL} width="200" className="img"></img>
    <span onClick={changePlus}>+</span> <p>{qtyy}</p><span onClick={changeMimus(item.price)}>-</span>
     <div> <p>{`$ ${
            item.price * qtyy
          }`}</p></div>
         
          
     
       <motion.button className='addbtn'
        whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
      
      >Add</motion.button>
      </div>
      </li>
   </ul>

    <div><p> ${
         setTotal(item.price * qtyy)
          }</p></div>
    
   </div>
  )
}

export default CartItem