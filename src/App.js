import React, { useDebugValue, useEffect } from 'react'
import Home from './Container/Home'
import Card from './Container/Card'
import Header from './components/Header/Header'
import {Route, Routes} from 'react-router-dom'
import {collection, getDocs} from 'firebase/firestore'
import './app.css'

import { setUserProperties } from 'firebase/analytics'
import { getAllFoodItems } from './utils/fireBaseGetData'
import { actionType } from './context/reducer'
import { useStateValue } from './context/StateProvider'
import CreateContainer from './components/CreateContainer'


const App = () => {
  const [{foodItems}, dispatch] =useStateValue();

  const fetchData = async() => {
    await getAllFoodItems().then((data) =>{
     dispatch({
      type : actionType.SET_FOOD_ITEMS,
      foodItems : data
     })
    })
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='app-screen'>
      <Header/>
      <>
      
      </>
           <Routes>
    <Route path='/' element= {<Home data={foodItems}/>}></Route>
    <Route path='/card' element= {<Card />}></Route>
    <Route path='/create' element= {<CreateContainer />}></Route>
</Routes>
</div>
  )
}

export default App