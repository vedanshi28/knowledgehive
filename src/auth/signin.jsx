import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "../context/AppContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://mui.com/"
        sx={{ textDecoration: "none" }}
      >
        Knowledge Hive
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Set the mode to 'dark'
    primary: {
      main: "#7171e3", // Your desired primary color for dark mode
    },
    secondary: {
      main: "#ffc107", // Your desired secondary color for dark mode
    },
    background: {
      default: "#000000", // Dark background color
      paper: "#424242", // Background color for components on top of dark background
    },
    text: {
      primary: "#fff", // Light color for text
    },
  },
});

export default function SignIn() {
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);
  const { setIsLoggedIn, setUser, user } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoggingIn(true);

    const response = await fetch(`http://localhost:5000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    // console.log(response);

    if (response.ok) {
      const json = await response.json();
      // console.log(json);
      setUser(json.userdata);
      // console.log(user);
      setIsLoggedIn(true);

      if (json.success) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(json.userdata));
        // localStorage.setItem('email',json.userdata.email);
        navigate("/home");
        toast.success("Login Successful!");
      } else {
        alert("Enter Valid Email and Password");
      }
    } else {
      // Handle error here
      if(!user) toast("Invalid email or password")
      console.error("Failed to fetch data:", response.statusText);
    }
    
    setLoggingIn(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in to your account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" sx={{ color: "#7171e3" }}>
                  Forgot Password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <Toaster/>
    </ThemeProvider>
  );
}
