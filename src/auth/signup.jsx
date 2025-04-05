import * as React from "react";
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
import { useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

const baseURL = process.env.REACT_APP_BASE_URL;

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

// TODO remove, this demo shouldn't need to reset the theme.

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

export default function SignUp() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name:"",
    email: "",
    username: "",
    password: "",
    contact: "",
    year_of_passing:"",
    branch:""
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Sign up in progress")
    const response = await fetch(`${baseURL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        name:formData.name,
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
        year_of_passing: formData.year_of_passing,
        branch:formData.branch
      }),
    });
    console.log(response)
  

    if (response.ok) {
      const json = await response.json();
      if (json.success) {
        setUser(json.userdata);
       console.log(json);
        setIsLoggedIn(true);
        navigate("/sign-in");
        toast.success("Sign Up Successful!");
      } else {
        alert("Enter Valid Email and Password");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }
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
            Sign Up
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
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={formData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contact"
                  label="Contact"
                  id="contact"
                  autoComplete="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="year_of_passing"
                  label="Year of Passing"
                  id="year_of_passing"
                  autoComplete="year_of_passing"
                  value={formData.year_of_passing}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="branch"
                  label="Branch"
                  id="branch"
                  autoComplete="branch"
                  value={formData.branch}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background:"#7171e3", borderRadius:"10px",color:"white" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2" sx={{ color: "#7171e3" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
