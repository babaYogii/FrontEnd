import React from 'react'
import { Grid, Container,TextField } from '@mui/material'

const login = () => {
  return (
      <Container>
      <Grid container mt='8rem'>
          <Grid item xs={6}  sx={{display:"flex", alignItems:"left" }}>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyg8rJYfx3XKBNuTJuq3AIzfxyvEu-XU3VQ&usqp=CAU' alt='loading' />
          </Grid>
          <Grid item xs={6}  sx={{}}>
            
          <TextField id="standard-basic" label="Email Id"
                        variant="standard" sx={{ mb: 2 , mt:4 }} />
<br/>
          <TextField id="standard-basic" label="Password"
                        variant="standard" sx={{ mb: 2 }} />
          </Grid>
      </Grid>
      </Container>
  )
}

export default login