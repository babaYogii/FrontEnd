import React from 'react'; 
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Container, TextField, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function Contact() {

  const [userData,setUserdata]= useState({uname:"",umobile:"",uemail:"",umessage:""});
    

    
  const contactData=async()=>{
    try {
      const res = await fetch('/getData',{
          method:"get",
          headers:{
            "content-Type":"application/json"
          },
      })

      const data = await res.json();
      setUserdata({...userData,uname:data.uname,uemail:data.uemail,umobile:data.umobile});

       if(!res.status===200){
         const error=new Error(res.error);
            throw error;
         }

    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
       contactData();
    
    },[])

   const handelinput=(e)=>{
 const name=e.target.name;
 const value=e.target.value;
      setUserdata({...userData,[name]:value})

   }


   const handelform= async (e)=>{
     e.preventDefault();
    const {uname,uemail,umobile,umessage}=userData;
    console.log(umessage)

    const res =await  fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        uname,uemail,umessage,umobile
      })
    })
      const data= await res.json();
if(!data){
  alert("no message send")
  console.log("Message not sent");
}else{
  alert("Message sent suceesfully")
  setUserdata({...userData,umessage:""});
}

     
   }


  return (
    <Container >
          <Box sx={{ width: '100%' ,my:4 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={4}>
          <Item>Phone
          <Typography variant='h6'>9307346898</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            Email
            <Typography variant='h6' >yogeshkodlinge123@gmail.com</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Address
            <Typography variant='h6'>Wagholi </Typography>
          </Item>
        </Grid>
      </Grid>
      <Paper sx={{p:2,my:6,width:"80%",ml:8}} elevation={4}>
        <Typography variant="h3" fontFamily="sans-serif">Get in Touch</Typography>
              <TextField variant="outlined" placeholder='Full Name' sx={{mx:2,my:4}} 
             name="uname" 
              value={userData.uname}
              onChange={handelinput}/>
              <TextField variant="outlined" placeholder='Email id'sx={{mx:2,my:4}}
             name="uemail" 
              value={userData.uemail}
              onChange={handelinput}/>
              <TextField variant="outlined" placeholder='Phone number' sx={{mx:2,my:4}} 
             name="uphone"
              value={userData.umobile}
              onChange={handelinput}/>
              <TextField variant="outlined" 
               name="umessage"
               onChange={handelinput}

              rows={6}
              multiline fullWidth placeholder='Describe For Contacting us' sx={{my:2,mb:4}}/>
        
        <Button  variant='contained' onClick={handelform} sx={{ml:4,mb:4}}>Send Message</Button>


      </Paper>

    </Box>
    </Container>

  );
}
