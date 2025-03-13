import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
//import Grid from '@mui/material/Grid2';
//import Link from '@mui/material/Link';
import {useState} from 'react'




export function SignUp(){

    //const [users, setUserData] = useState({})
    const handleSignUp = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget); 
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password")
        const acceptTerms = data.get('tandc') === 'true';
  
        if (!acceptTerms) {
          alert("You must agree to the T&C to continue.");
          return;
        }
    
        try {
            const response = await fetch("http://localhost:5000/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username,  email, password}),
                credentials: "include",
            })
            const data = await response.json();
            if (!response.ok){
                throw new Error(data.error || "Register failed");
            }
            window.location.href = "/login";
        } catch (error){
            alert(error.message);
        }
    }

    return (
        <div style = {{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Container>
                    <Paper elevation={10} sx={{padding: 4, textAlign: "center"}} >
                        <Avatar sx={{mx: "auto", bgcolor: "secondary.main", mb: 1}}/>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <Box component="form" onSubmit={handleSignUp} noValidate sx={{mt:2}}>
                            <TextField name="username" placeholder="Enter username" fullWidth required autoFocus sx={{ mb: 2 }} />
                            <TextField name="email" placeholder="Enter email" fullWidth required autoFocus sx={{ mb: 2 }} />
                            <TextField name="password" placeholder="Enter password" fullWidth required type="password" sx={{ mb: 2 }} />
                            <FormControlLabel
                                control={<Checkbox name = "tandc" value="true" color="primary"/>}
                                label="Terms and conditions"
                            />
                            <Button type="submit" variant='contained' fullWidth sx={{mt: 2}}>
                                Register
                            </Button>
                        </Box>

                    </Paper>
                </Container>


            </Box>
        </div>
    )
}