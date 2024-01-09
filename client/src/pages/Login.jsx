import React from 'react';
import {Box, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";

const Login = () => {
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = () => {

    }

    return (
        <>
            <Box
                component='form'
                sx={{mt:1}}
                onSubmit={handleSubmit}
                noValidate
            >
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='username'
                    label='Username'
                    name='username'
                    disabled={loading}
                />
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='password'
                    label='Password'
                    name='password'
                    disabled={loading}
                />
                <LoadingButton
                sx={{mt: 3,mb:2}}
                fullWidth
                variant={'outlined'}
                color={'success'}
                type={'submit'}
                loading={loading}
                >
                    Login
                </LoadingButton>
            </Box>
        </>
    );
};

export default Login;