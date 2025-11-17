import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPageForm({
  onLogin,
  themeOptions,
  setShowComponent,
}) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const { email, password } = form;
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (onLogin) {
        onLogin(e, form);
      }
    }
  };

  return (
    <Box>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          backgroundColor: themeOptions?.palette?.background?.paper,
          width: "100%",
          maxWidth: 400,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h5"
          mb={2}
          color={themeOptions?.palette?.text?.primary}
        >
          Prihlásenie
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
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
            autoComplete="current-password"
          />
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Prihlásiť sa
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                setShowComponent("register");
                navigate("/register");
              }}
            >
              Registrácia
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
