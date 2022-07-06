import React, { useEffect, useState } from 'react'
import { actionType } from '../../context/reducer'
import { useStateValue } from '../../context/StateProvider'
import { AnimatePresence, motion } from "framer-motion";
import Baner from '../Baner/Baner';
import './categoryList.css'
import Loader from '../Loader';

const CategoryList = ({data}) => {

const[items, setItems] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("cardItems");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});

useEffect(()=>{
 window.localStorage.setItem("cardItems", JSON.stringify(items));
},[items])

 //const [{cardItems}, dispatch] = useStateValue()

 //const addtocard = () =>{
  
//   dispatch({
//     type: actionType.SET_CARDITENS,
//     cardItems: items
//   });
//   localStorage.setItem("cardItems", JSON.stringify(items));
//  };

//  useEffect(() =>{
//   localStorage.setItem("cardItems", JSON.stringify(items));
//  },[items]);
  return (
    <AnimatePresence>
   
  <div div className='container'>
   {data? 
  data.map((item)=>(
    <ul>
      <li key={item.id} className="card">
        <div className='product__inner'>
        <p>{item.title}</p>
        <img src={item.imageURL} width="200" className="img"></img>
        <p>{item.price}$ </p>
       
        <motion.button className='addbtn'
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
        onClick={()=>setItems([...items,item])}
        >Add</motion.button>
        </div>
        </li>
    </ul>
  )): <Loader/>}
</div>
</AnimatePresence>
  )
}

export default CategoryList