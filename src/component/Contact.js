import * as React from 'react';
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
              <TextField variant="outlined" placeholder='Full Name' sx={{mx:2,my:4}}/>
              <TextField variant="outlined" placeholder='Email id'sx={{mx:2,my:4}}/>
              <TextField variant="outlined" placeholder='Phone number' sx={{mx:2,my:4}}/>
              <TextField variant="outlined" 
              rows={6}
              multiline fullWidth placeholder='Describe For Contacting us' sx={{my:2,mb:4}}/>
        
        <Button variant='contained' sx={{ml:4,mb:4}}>Send Message</Button>


      </Paper>

    </Box>
    </Container>

  );
}
