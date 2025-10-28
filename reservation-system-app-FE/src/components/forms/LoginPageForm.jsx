import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function LoginPageForm() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email je povinný";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.email = "Neplatný email";
    }
    if (!password) {
      newErrors.password = "Heslo je povinné";
    } else if (password.length < 6) {
      newErrors.password = "Heslo musí mať aspoň 6 znakov";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Tu pridajte login logiku
      alert("Prihlasovanie...");
    }
  };

  return (
    <Box>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          backgroundColor: theme.palette.background.paper,
          width: "100%",
          maxWidth: 400,
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h5" mb={2} color={theme.palette.text.primary}>
          Prihlásenie
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            margin="normal"
            autoComplete="email"
          />
          <TextField
            label="Heslo"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            margin="normal"
            autoComplete="current-password"
          />
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Prihlásiť sa
            </Button>
            <Button variant="outlined" color="secondary">
              Registrácia
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
