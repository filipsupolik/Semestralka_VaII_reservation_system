import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function RegisterPageForm() {
  const theme = useTheme();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isOwner: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "Meno je povinné";
    if (!form.lastName) newErrors.lastName = "Priezvisko je povinné";
    if (!form.email) newErrors.email = "Email je povinný";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Neplatný email";
    if (!form.password) newErrors.password = "Heslo je povinné";
    else if (form.password.length < 6)
      newErrors.password = "Heslo musí mať aspoň 6 znakov";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Tu pridajte registračnú logiku
      alert("Registrácia...");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
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
          Registrácia
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Meno"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
            margin="normal"
            autoComplete="given-name"
          />
          <TextField
            label="Priezvisko"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
            margin="normal"
            autoComplete="family-name"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            margin="normal"
            autoComplete="email"
          />
          <TextField
            label="Heslo"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            margin="normal"
            autoComplete="new-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.isOwner}
                onChange={handleChange}
                name="isOwner"
                color="primary"
              />
            }
            label="Som vlastník služby"
            sx={{ mt: 2 }}
          />
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Registrovať sa
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
