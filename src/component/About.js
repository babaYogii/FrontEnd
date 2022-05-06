import { Container ,Grid, Stack,Paper,  Typography, Button} from '@mui/material'
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const naviagte = useNavigate();
  const [userData,setUserdata]= useState({});
    

    
  const callAboutPage=async()=>{
    try {
      const res = await fetch('/about',{
          method:"get",
          headers:{
            Accept:"application/json",
            "content-Type":"application/json"
          },
          credentials:"include"
      })

      const data = await res.json();
      setUserdata(data);

       if(!res.status===200){
         const error=new Error(res.error);
            throw error;
         }

    } catch (error) {
      console.log(error);
      naviagte('/login');
    }
  }

    useEffect(() => {
       callAboutPage();
    
    },[])
    
    const {uname,umobile,uemail,uprofession}=  userData;

  return (
   <Container>
     <Paper sx={{p:4,m:4}}>
      <Grid container>
         <Grid item xs={4}>
           <Stack>
             <img height="200rem" width="270rem" src='https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt='loading'/>
             <p>Work Links</p>
             <a href='https://yogeshprofile.000webhostapp.com'  target="_blank" rel="noreferrer">
               <Typography sx={{color:'black',my:1}}>Web Profile</Typography>
             </a>
             <a href='https://yogeshprofile.000webhostapp.com'  target="_blank" rel="noreferrer">
               <Typography sx={{color:'black',my:1}}>Loading</Typography>
             </a>
             <a href='https://yogeshprofile.000webhostapp.com'  target="_blank" rel="noreferrer">
               <Typography sx={{color:'black',my:1}}>Waiting</Typography>
             </a>
             <a href='https://yogeshprofile.000webhostapp.com'  target="_blank" rel="noreferrer">
               <Typography sx={{color:'black',my:1}}>Just finishing off</Typography>
             </a>
             <a href='https://yogeshprofile.000webhostapp.com'  target="_blank" rel="noreferrer">
               <Typography sx={{color:'black',my:1}}>ok done</Typography>
             </a>
          
           </Stack>
         </Grid>
         <Grid item xs={4}>
           <Typography variant='h4'>{uname}</Typography>
           <Typography variant="body1" color="blue"sx={{my:1}}>{uprofession}</Typography>
           <Typography variant="body1" color="Green"sx={{my:1}}>Ratings<span>10/10</span></Typography>
           <br/>
           <br/>
           <br/>
           
{/* Tabs are pending would be doing tommorro */}
        <Typography variant='h5'>{uname}</Typography>
        <Typography variant='h5'>{uprofession}</Typography>
        <Typography variant='h5'>{uemail}</Typography>
        <Typography variant='h5'>{umobile}</Typography>

         </Grid>
         <Grid item xs={4} alignItems="right">
           <Button variant='filled'>Edit Profile</Button>
         </Grid>

      </Grid>

      </Paper>
   </Container>


    )
}

export default About