import * as React from 'react';
import { useState } from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper, Typography } from '@mui/material';
import {useNavigate,NavLink} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from './Login'
import login from './Login';



export default function Register() {

    let navigate = useNavigate();
    const [user,SetUser]=useState(
        {
            uname:"",uemail:"",umobile:"",uprofession:"",upassword:"",cupassword:""
        }
    );

    let name,value;
    
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        SetUser({...user,[name]:value})
    }

    const submitdata= async (e)=>{
        
        const {uname,upassword,cupassword,uemail,uprofession,umobile}=user;

            const res= await fetch('/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    uname,upassword,cupassword,uemail,uprofession,umobile
                })
            })
const data = await res.json();
const {error , message}=data;
window.alert(error || message);


if(message==="Done for now"){
   navigate('/login');
}


    } 
  



    return (
        <Container>
            <Paper sx={{
                mt: '4rem', alignContent: "center", justifyContent: "center",
                alignItems: "center"
            }}>

                <Typography variant='h2' sx={{ mx: 2 }} component="h4">Sign up</Typography>
                <Box sx={{display:"flex" , }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { width: '38vw', mx: 8, my: 2 },
                        display: "flex", flexDirection: "column"
                    }}
                >
                    <TextField id="standard-basic" label="Name" name="uname" value={user.uname}
                    onChange={handleInputs} icon={<AccountCircleIcon/>} variant="standard"/>
                    <TextField id="standard-basic" label="Email Id" name="uemail" onChange={handleInputs}
                    value={user.uemail}
                        variant="standard" sx={{ mb: 2 }} />
                    <TextField id="standard-basic" label="phone" name='umobile'
                    onChange={handleInputs}
                      value={user.umobile}  variant="standard" sx={{ mb: 2 }} />
                        
                    <TextField id="standard-basic" label="Profession" name='uprofession' onChange={handleInputs}
                       value={user.uprofession} variant="standard" sx={{ mb: 2 }} />
                        
                    <TextField id="standard-basic" label="Password" name='upassword' onChange={handleInputs}
                      value={user.upassword}  variant="standard" sx={{ mb: 2 }} />
                        
                    <TextField id="standard-basic" label="Confirm Password" name='cupassword' onChange={handleInputs}
                      value={user.cupassword}  variant="standard"  />
                </Box>
                <center><Box sx={{display:"flex" , flexDirection:"column",my:5 }}>
                    <img src="https://st2.depositphotos.com/3837271/6941/i/600/depositphotos_69417709-stock
                    -photo-text-sign-up.jpg" alt='loading' width={400} height={350} />
                    <NavLink to='/login' textDecoration='none'><div color='pink'>I am already Register</div></NavLink>
                    </Box></center>
                </Box>

                <Button variant='contained' onClick={()=>{submitdata()}} sx={{ml:12,mb:4}}>Register</Button>
            </Paper>
        </Container>
    );
}
