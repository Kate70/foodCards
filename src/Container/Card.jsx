import React, { useEffect, useState } from 'react'
import { useStateValue } from '../context/StateProvider'
import styles from "./card.css"
import { actionType } from '../context/reducer'
import { useForm } from 'react-hook-form'
import Loader from '../components/Loader'
import { AnimatePresence, motion } from "framer-motion";
import CartItem from '../components/CartItem/CartItem'


const Card = () => {
  const [cards, setCards]=useState([])
  const [qtyy, setQty] = useState(1)
const changePlus=()=>{
  setQty(qtyy+1)
}

const changeMimus=()=>{
  setQty(qtyy-1)
}
  //console.log(cards);
  const {register, handleSubmit, formState:{errors, submitCount}, watch} = useForm({mode: 'onChange'})
const onSubmit = (data) =>{
  //console.log("Send", data);
  //e.target.reset()
} 
 useEffect(()=>{
 const data = window.localStorage.getItem("cardItems");
 if (data !==null)
 setCards(JSON.parse(data))
 console.log('kk0');
 },[])

  return (
    <div className='container1'>
      <div className='userForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-field'>
      <label>Name:</label>
        <input type="text" 
        className='form-input'
        placeholder="Name"        
        {...register('name', {required:true, minLength:3})}></input>
        {errors.name && <p className='required'>This is required! Min length is 3</p>}
        </div>
        <div className='input-field'>
        <label>Email:</label>
        <input
           className='form-input'
          placeholder="email"
          type="text"
          {...register('email', {
            required:true, minLength:5,           
          })}          
        />
        {errors.email && <p className='required'>This is required! Min length is 5</p>}
         
       </div>
       <div className='input-field'>
          <label>Adress:</label>
         <input type="text"
         className='form-input'
        placeholder="Address"
         {...register('email', {
            required:true, minLength:5,           
          })}   ></input>
            {errors.email && <p className='required'>This is required! Min length is 5</p>}
          </div>
          <div className='input-field'>
        <label>Mobile number:</label>
        <input type="tel"
        className='form-input'
         placeholder="Mobile number"
          {...register('mobileNumber',{
            required:true
          })} />
          {errors.mobileNumber && <p className='required'>This is required!</p>}
      </div>
   
 <button className='submit-btn' type="submit">Submit</button>
</form>
     </div>
      <div className='card-sgop'>
       
      <AnimatePresence>
   
   <div div className='container'>
    {cards? 
   cards.map((item)=>(
  <CartItem key={item.id} item={item}/>)): <Loader/>}
  {/* <div>CartItem
    {cards.map((i)=>(
        <ul>
     <li key={i.id} className="card">
      <div className='product__inner'>
      <p>{i.title}</p>
      <img src={i.imageURL} width="200" className="img"></img>
    <span onClick={changePlus}>+</span> <p>{qtyy}</p><span onClick={changeMimus}>-</span>
     <div> <p>{`$ ${
            i.price * qtyy
          }`}</p></div>
     
       <motion.button className='addbtn'
        whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
      
      >Add</motion.button>
      </div>
      </li>
   </ul>

      ))
    }
   </div> */}
 </div>
 </AnimatePresence>
           
          </div>
          
    
      </div>
    
  )
}

export default Card