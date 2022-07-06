import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Category from '../components/Category/Category';




const Home = ({data}) => {
    //console.log(data);
  return (
            <>   
    <Category data = {data}/>  
   </>
 
  )
}

export default Home