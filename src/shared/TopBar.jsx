import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import profile from "../assets/icons/profile-placeholder.svg"
import LogoutIcon from '@mui/icons-material/Logout';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
    primary: {
      main: '#3f51b5', // Your custom dark primary color
    },
    secondary: {
      main: '#f57c00', // Your custom dark secondary color
    },
    background: {
      default: '#0d0d0d', // Dark background color
    },
    text: {
      primary: '#fff',   // White text for better contrast
    },
  }
});


const TopBar = () => {
  const navigate = useNavigate();

 // useEffect(() => {
 //   if (isSuccess) navigate(0);
 // }, [isSuccess]);

  return (
    <ThemeProvider theme={theme}>
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
        <h1 className='font-bold'>Knowledge Hive</h1>
        </Link>

        <div className="flex gap-4">
          <Button
            onClick={''}>
            <LogoutIcon/>
          </Button>
          <Link to={''} className="flex-center gap-3">
            <img
              src={profile}
              alt="profile"
              className="h-4 w-4 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
    </ThemeProvider>
  );
};

export default TopBar;