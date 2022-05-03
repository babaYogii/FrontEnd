import {  Typography, Grid } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
     <Grid container>
       <Grid item xs={6} sx={{backgroundColor:"#DBF3FA",height:"100vh",textAlign:"right"}}> 
       <Typography variant='h4' sx={{mx:1,my:3}}>WE ARE </Typography>

       </Grid>
       <Grid item xs={6} sx={{backgroundColor:"#F5F0F0"}}> 
       <Typography variant='h4' sx={{mx:1,my:3}}>MERN DEVELOPER </Typography>
       </Grid>
     </Grid>
    </div>
  )
}

export default Home