import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



function register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData
  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
   }


  const onSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1>
         Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '34ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            id="Name"
            type='text'
            label="Name"
            variant="outlined"
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={onChange}
          />
          <TextField
            id="Email"
            type='text'
            label="Email"
            variant="outlined"
            name='email'
            value={email}
            placeholder='Enter your Email'
            onChange={onChange}
          />
          <TextField
            id="Password"
            type='password'
            label="Password"
            variant="outlined"
            name='password'
            value={password}
            placeholder='Enter your Password'
            onChange={onChange}
          />
           <TextField
            id="Password2"
            type='password'
            label="Confirm Password"
            variant="outlined"
            name='password2'
            value={password2}
            placeholder='Re enter Your Password'
            onChange={onChange}
          />
        </Box>
          <div className='mt-4'>
          <Button variant="contained"
           color='success'
            type='submit'
            size='large'
            >Register
            </Button>
          </div>

      </section>
    </>
  )
}

export default register