//import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export function Login() {
  const theme = useTheme(); 
  const handleSignIn = async (provider, formData) => { 
    const email = formData.get('email');
    const password = formData.get('password');
    const acceptTerms = formData.get('tandc') === 'true';

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
    <AppProvider theme={theme}>
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        width: "100vw",  
        backgroundColor: theme.palette.background.default,
      }}
    >
      <div style={{ width: "100%", maxWidth: 400 }}> {/* Limits form width */}
        <SignInPage
          signIn={handleSignIn} 
          slotProps={{
            emailField: { variant: 'standard', autoFocus: false },
            passwordField: { variant: 'standard' },
            submitButton: { variant: 'outlined' },
            rememberMe: {
              control: (
                <Checkbox
                  name="tandc"
                  value="true"
                  color="primary"
                  sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
                />
              ),
              color: 'textSecondary',
              label: 'I agree with the T&C',
            },
          }}
          providers={providers}
        />
      </div>
    </div>
  </AppProvider>
  );
}