import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {Usercontext} from "../App"

const Logout = () => {
const {state,dispatch}=useContext(Usercontext);

  const navigate=useNavigate();
   //Logout logic
   useEffect(() => {
    fetch('/logout',{
        methods:'GET',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
    }).then((res)=>{
      dispatch({action:"USER",payload:false})
        navigate('/login')
        if(res.status!==200){
            const erro=new Error(res.error);
            throw erro;
        }
    }).catch((error)=>{
        console.log(error);
    })
   
     
   })
   
  

  return (
    <div><h1>LOg out</h1></div>
  )
}

export default Logout