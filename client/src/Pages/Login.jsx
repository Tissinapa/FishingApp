//import * as React from 'react';
//import Link from '@mui/material/Link';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
//import { AppProvider } from '@toolpad/core/AppProvider';
//import { SignInPage } from '@toolpad/core/SignInPage';
//import { useTheme } from '@mui/material/styles';





//const providers = [{ id: 'credentials', name: 'Email and Password' }];

/* function SignUpLink() {
  return (
    <Link href="/" variant="body2">
      Sign up
    </Link>
  );
} */


  export function Login() {
    //const theme = useTheme(); 
    const handleSignIn = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget); 
      const email = data.get('email');
      const password = data.get('password');
      const acceptTerms = data.get('tandc') === 'true';
  
      if (!acceptTerms) {
        alert("You must agree to the T&C to continue.");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.error || "Login failed");
        }
  
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard"; 
      } catch (error) {
        alert(error.message);
      }
    };
   
    return (
      
      <div style = {{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
        
        
      
      }}>

      
        <Box 
          sx={{ 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
              
              
          }}
        >
          <Container maxWidth="xs">
            <Paper elevation={10} sx={{ padding: 4, textAlign: "center" }}>
              <Avatar sx={{ mx: "auto", bgcolor: "secondary.main", mb: 1 }} />
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 2 }}>
                <TextField name="email" placeholder="Enter email" fullWidth required autoFocus sx={{ mb: 2 }} />
                <TextField name="password" placeholder="Enter password" fullWidth required type="password" sx={{ mb: 2 }} />
                <FormControlLabel
                  control={<Checkbox name="tandc" value="true" color="primary" />}
                  label="Terms and conditions"
                />
                <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                  Sign In
                </Button>
              </Box>
              <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
                <Grid item>
                  Ei käyttäjää?{" "}
                  <Link href="/signup">Sign Up</Link>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Box>
      </div>
    );
  }