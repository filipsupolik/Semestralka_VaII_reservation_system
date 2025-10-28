import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const isAuthenticated = false;

export default function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {!isAuthenticated && (
            <Button color="inherit" component={Link} to="/login">
              Prihlásiť sa
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
