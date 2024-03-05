import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom';
export default function Home() {
    const [user,setUser]=useState('');
    const [pass,setPass]=useState('');
   useEffect(()=>{
   setUser(localStorage.getItem('username'));
   setPass(localStorage.getItem('password'))
   },[])
  return (
    <div>
     {user==='manikant'&&pass==='1234'?'i am home':<Link to="/signin">login</Link>}
    </div>
  )
}
