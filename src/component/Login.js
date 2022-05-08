import React,{useState,useContext} from 'react'
import { Grid, Container,TextField, Button } from '@mui/material'
import {useNavigate}from 'react-router-dom'
import {Usercontext} from '../App'


const Login = () => {


  const  {state,dispatch}= useContext(Usercontext)
  const navigate=useNavigate();
  const [uemail, setEmail] = useState("");
  const [upassword,setPassword]=useState("");
  
const loginuser= async (e)=>{
    e.preventDefault();

    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        uemail,upassword
      })
      
    })
    const data= await res.json();
        const {message }=data;
        console.log(data.message)
    if(data.message==="Check user id or password "){
        window.alert(message);
        return
      }

    if(res.status===400 || !data){
      window.alert('Invalid credentials');
      
    }else{
     dispatch({type:"USER",payload:true})
      window.alert("Login successful");
      navigate('/home');
    }
    


}

  return (
    <Container>
      <Grid container mt='8rem'>
          <Grid item xs={6}  sx={{display:"flex", alignItems:"left" }}>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyg8rJYfx3XKBNuTJuq3AIzfxyvEu-XU3VQ&usqp=CAU' alt='loading' />
          </Grid>
          <Grid item xs={6}  sx={{}}>
            
          <TextField id="standard-basic" label="Email Id"
          value={uemail} onChange={(e)=>setEmail(e.target.value)}
                        variant="standard" sx={{ mb: 2 , mt:4 }} />
<br/>
          <TextField id="standard-basic" label="Password"
          value={upassword} onChange={(e)=>setPassword(e.target.value)}
                        variant="standard" sx={{ mb: 2 }} />
          </Grid>
          <Button variant='outlined' onClick={loginuser}>Login</Button>
      </Grid>
      </Container>
  )
}

export default Login