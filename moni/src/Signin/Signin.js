import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      FirstName:data.get('FirstName'),
      EmailAddress: data.get('EmailAddress'),
      CreatePassword: data.get('Create Password'),
      ConfirmPassword: data.get('Confirm Password'),
      MobileNumber:data.get('Mobile Number')
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h2">
            BEAT BOX
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="FirstName"
              label="FirstName"
              name="FirstName"
              autoComplete="FirstName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email Address"
              label="Email Address"
              name="Email Address"
              autoComplete="Email Address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Create Password"
              label="Create Password"
              type="Create Password"
              id="Create Password"
              autoComplete="Create Password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Confirm Password"
              label="Confirm Password"
              type="Confirm Password"
              id="Confirm Password"
              autoComplete="Confirm Password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Mobile Number"
              label="Mobile Number"
              type="Mobile Number"
              autoComplete="Mobile Number"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I accept your Terms and Conditions"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SIGN UP
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Already an member?  
               <Button
              type="submit"

              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              LOGIN
            </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}