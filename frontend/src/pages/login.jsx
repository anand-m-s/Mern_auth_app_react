import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { name, email, password, password2 } = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    Login
                </h1>
                <p>Welcome to your Account</p>
            </section>

            <section className='form'>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '60ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={onSubmit}
                >

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

                </Box>
                <div className='mt-4'>
                    <Button variant="contained"
                        color='info'
                        type='submit'
                        size='large'
                    >Login
                    </Button>
                </div>

            </section>
        </>
    )
}

export default Login