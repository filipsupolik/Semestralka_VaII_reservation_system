import React from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default class LoginPageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
      },
      errors: {},
      onLogin: props.onLogin,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const { email, password } = this.state.form;
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
    this.setState({ errors: newErrors });
    return Object.keys(newErrors).length === 0;
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validate()) {
      if (this.state.onLogin) {
        this.state.onLogin(e, this.state.form);
      }
    }
  }

  render() {
    const themeOptions = this.props.themeOptions;
    const { form, errors } = this.state;
    return (
      <Box>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            backgroundColor: themeOptions.palette.background.paper,
            width: "100%",
            maxWidth: 400,
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h5"
            mb={2}
            color={themeOptions.palette.text.primary}
          >
            Prihlásenie
          </Typography>
          <form onSubmit={this.handleSubmit} noValidate>
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
                  this.props.navigate("/register");
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
}
