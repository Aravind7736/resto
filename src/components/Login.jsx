import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
        <Typography variant='h4' align='center' >LOGIN PAGE</Typography><br />
        <TextField label="enter name"variant='outlined' style={{marginLeft:'400px'}}/><br /><br />
        <TextField label="enter password" type='password' variant='outlined'  style={{marginLeft:'400px'}}/><br /><br />
        <Button variant="contained" color="success"  style={{marginLeft:'400px'}}>
  Login
</Button>    <Typography variant='h7'>or</Typography><br />
    </div>
  )
}

export default Login