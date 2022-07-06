import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import Logo from '../../img/logo.jpg'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase/init-firebase';
import { async } from '@firebase/util';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import CreateContainer from '../CreateContainer';
import { NavLink, useNavigate } from "react-router-dom";
import { MdShoppingCart, MdLogout, MdAdd } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi"

const Header = () => {
 const firebaseAuth = getAuth(app);
 const provider = new GoogleAuthProvider()
 const [{user}, dispatch] =useStateValue()
 const [isLoginMenu, setLoginMenu] = useState(false)

 const login = async() => { 
  if (!user){
    const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
  dispatch({
    type: actionType.SET_USER,
    user: providerData[0]
  });
  localStorage.setItem('user', JSON.stringify(providerData[0]))
 
  }else{
    setLoginMenu(!isLoginMenu)
  }
  
 }

const logout = () => {
  setLoginMenu(false)
  localStorage.clear()
  dispatch({
    type: actionType.SET_USER,
    user: null
  })

}

  return (
    <AnimatePresence>
    <div className='header'>
      <div className='login'>
        <motion.img src={user? user.photoURL : Logo} onClick={login}
         className='user-photo'
        whileTap={{scale: 0.6}}>
         
        </motion.img></div> 
       {
        isLoginMenu && (
         
            user ?  <div className='logout'>
            <p onClick={logout}>Logout</p>
            <NavLink to={"/create"} onClick={() => setLoginMenu(false)}>
                    <p className="px-4 py-2 cursor-pointer hover:bg-slate-200 flex items-center gap-3">
                      New Item <MdAdd />
                    </p>
                  </NavLink>
          </div>: null        
        
        )
       }
       
    <ul className='links'>
      <li className='link'><Link to='/' >Shops</Link></li>
      <li className='link'><Link to='/card'>Card
    </Link></li><span className='icon'> < FiShoppingBag ></FiShoppingBag></span>
    </ul>              
    </div>
   
    </AnimatePresence>
  )
}

export default Header