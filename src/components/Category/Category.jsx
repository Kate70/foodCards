import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { categories } from '../../data';
import CategoryList from '../CategoryList/CategoryList';
import Baner from '../Baner/Baner';
import styled from './category.css'

const 
Category = ({data}) => {
  const [filter, setFilter] = useState("");
  const [baner, setBaner]=useState(true)
  const [{foodItems}, dispatch]=useStateValue()
  console.log(data);
  const chooseCategory = (categor)=>{
    setFilter(categor);
    setBaner(false)
  }


  return (
    <div className='drigcol'> 
    <div className='drigcol1'> 
   {
    categories&& 
    categories.map((cat)=> (
      <div className='row'>
      <div key={cat.id} className={`group ${filter===cat.urlParamName?'bg-gray-light-500 ': 'bg-zinc-50 hover:bg-blue'}`}
      onClick={()=>chooseCategory(cat.urlParamName)}>
        <div>{cat.name}</div>
      </div>
      </div>
    ))
   }
   </div>
  <div className='dragicol2'>
  {baner? <Baner/>: <CategoryList data={foodItems?.filter(n => n.category === filter)}/>}   
    
  </div>
  </div>
  )
}

export default Category