import React from 'react';
import './baner.css'
import { TbArrowBigLeft} from "react-icons/tb";

const Baner = () => {
  return (
    <div className='fullcontainer'>
        <div className='title-container'>
        <p className='title'>Choice of dishes</p>
        <TbArrowBigLeft className='arrow'></TbArrowBigLeft>
        
        </div>
    </div>
  )
}

export default Baner