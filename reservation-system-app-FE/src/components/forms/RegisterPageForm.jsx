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
import { useNavigate } from "react-router-dom";

export default function RegisterPageForm({
  onRegister,
  themeOptions,
  setShowComponent,
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isOwner: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const { firstName, lastName, email, password } = form;
    const newErrors = {};
    if (!firstName) newErrors.firstName = "Meno je povinné";
    if (!lastName) newErrors.lastName = "Priezvisko je povinné";
    if (!email) newErrors.email = "Email je povinný";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      newErrors.email = "Neplatný email";
    if (!password) newErrors.password = "Heslo je povinné";
    else if (password.length < 6)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      // stay on register page and ensure parent reflects it
      if (setShowComponent) setShowComponent("register");
      return;
    }

    if (onRegister) {
      try {
        // support both sync and async onRegister
        const result = onRegister(e, form);
        if (result && typeof result.then === "function") {
          await result;
        }
        // after successful registration, show login
        setShowComponent("login");
        try {
          navigate("/login");
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        // server-side registration error: show message and stay on register
        const msg = (err && err.message) || "Registrácia zlyhala";
        setErrors((prev) => ({ ...prev, server: msg }));
        if (setShowComponent) setShowComponent("register");
      }
    }
  };

  const theme = themeOptions || {};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme?.palette?.background?.default,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          backgroundColor: theme?.palette?.background?.paper,
          width: "100%",
          maxWidth: 400,
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h5" mb={2} color={theme?.palette?.text?.primary}>
          Registrácia
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          {errors.server && (
            <Typography color="error" mb={2}>
              {errors.server}
            </Typography>
          )}
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                setShowComponent("login");
              }}
            >
              Registrovať sa
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                setShowComponent("login");
                try {
                  navigate("/login");
                } catch (err) {}
              }}
            >
              Prihlásiť sa
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
