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
import { useState , useContext} from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

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
  //const [showPass, setShowPass] = useState(false);
  //const [showConfirmPass, setShowConfirmPass] = useState(false);
  // const navigate = useNavigate();
  // const { setIsLoggedIn, setUser } = useContext(AppContext);
  
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    username: "",
    password: "",
    contact: "",
    passing_year:"",
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

    // console.log(JSON.stringify({
    //   username: formData.username,
    //   email: formData.email,
    //   password: formData.password,
    //   contact: formData.contact,
    // }));

    const response = await fetch(`http://localhost:5000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
        year_of_passing:formData.passing_year,
        branch:formData.branch
      }),
    });
  

    if (response.ok) {
      const json = await response.json();
      setUser(json.userdata);
      // console.log(json);
      setIsLoggedIn(true);
      if (json.success) {
        // console.log(JSON.stringify(json.userdata));
        // localStorage.setItem("isLoggedIn", true);
        // localStorage.setItem("user", JSON.stringify(json.userdata));
        navigate("/sign-in");
        toast.success("Sign Up Successful!");
        // toast.success("Please Login.");
      } else {
        alert("Enter Valid Email and Password");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }
  };
/*
  const handleSubmit =  (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      contact: data.get("contact"),
    });
  }
    
    try {
     // const newUser = await createUserAccount(user);

      if (!newUser) {
        console.log("SignUp failed.")
        return;
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        console.log("Something went wrong. Please login your new account")
        navigate("/sign-in");

        return;
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();

        navigate("/");
      } else {
        console.log("Login failed. Please try again.")
        return;
      }
    } catch (error) {
      console.log({ error });
    }
  };
*/
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
                  name="passing_year"
                  label="Year of Passing"
                  id="passing_year"
                  autoComplete="passing_year"
                  value={formData.passing_year}
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
