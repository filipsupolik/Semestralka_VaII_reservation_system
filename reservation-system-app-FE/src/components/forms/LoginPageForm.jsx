import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { requestAuth } from "../../api/authService";

export default function LoginPageForm({
  onLogin,
  themeOptions,
  setShowComponent,
}) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // call backend login endpoint
      const resp = onLogin
        ? // if parent provided onLogin we can call it and await result
          await onLogin(e, form)
        : await requestAuth("POST", "/login", {
            email: form.email,
            password: form.password,
          });

      // try to extract token from response
      const token = resp?.data?.token || resp?.data?.accessToken || resp?.token;
      if (token) {
        login(token);
      }

      // update parent view state if available
      if (setShowComponent) setShowComponent("showServices");
      // navigate to book-now (or to a protected area)
      try {
        navigate("/book-now");
      } catch (navErr) {
        // ignore
      }
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Prihlásenie zlyhalo";
      setErrors((prev) => ({ ...prev, server: msg }));
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
          {errors.server && (
            <Typography color="error" mb={2}>
              {errors.server}
            </Typography>
          )}
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
