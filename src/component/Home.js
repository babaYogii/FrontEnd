import {  Typography, Grid } from '@mui/material'
import React, { useState,useEffect } from 'react'

const Home = () => {

const [name,setName]=useState('');
const [show,setShow]=useState(false);
  const Homedata=async()=>{
    try {
      const res = await fetch('/getData',{
          method:"get",
          headers:{
            "content-Type":"application/json"
          },
      })

      const data = await res.json();
      setName(data.uname);
      console.log(data.uname);
      setShow(true);

       if(!res.status===200){
         const error=new Error(res.error);
            throw error;
         }

    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
       Homedata();
    
    },[])


  return (
    <div>
     <Grid container>
       <Grid item xs={6} sx={{backgroundColor:"#DBF3FA",height:"100vh",textAlign:"right"}}> 
       <Typography variant='h4' sx={{mx:1,my:3}}>WE ARE </Typography>
       </Grid>
       <Grid item xs={6} sx={{backgroundColor:"#F5F0F0"}}> 
       <Typography variant='h4' sx={{mx:1,my:3}}>MERN DEVELOPER </Typography>
       {show ? <h2>Welcome {name}</h2>:<h2>"Hello , Your are welcome "</h2>}
       </Grid>
     </Grid>
    </div>
  )
}

export default Home