import React from "react";
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

export default class RegisterPageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isOwner: false,
      },
      errors: {},
      onRegister: props.onRegister,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const { firstName, lastName, email, password } = this.state.form;
    const newErrors = {};
    if (!firstName) newErrors.firstName = "Meno je povinné";
    if (!lastName) newErrors.lastName = "Priezvisko je povinné";
    if (!email) newErrors.email = "Email je povinný";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      newErrors.email = "Neplatný email";
    if (!password) newErrors.password = "Heslo je povinné";
    else if (password.length < 6)
      newErrors.password = "Heslo musí mať aspoň 6 znakov";
    this.setState({ errors: newErrors });
    return Object.keys(newErrors).length === 0;
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validate()) {
      if (this.state.onRegister) {
        this.state.onRegister(e, this.state.form);
      }
      // Po registrácii prepni na login
      if (this.props.onSwitchToLogin) {
        this.props.onSwitchToLogin();
      }
    }
  }

  render() {
    const themeOptions = this.props.themeOptions;
    const { form, errors } = this.state;
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
          <form onSubmit={this.handleSubmit} noValidate>
            <TextField
              label="Meno"
              name="firstName"
              value={form.firstName}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
              <Button variant="outlined" color="secondary">
                Prihlásiť sa
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    );
  }
}
