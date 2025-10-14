import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import "./LoginPage.css";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState("");
  return (
    <div className="login-page-root">
      <Paper className="login-card" elevation={6}>
        <Stack spacing={2} sx={{ width: "320px" }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: "center", color: "#1e96fc" }}
          >
            Sign in
          </Typography>
          <TextField
            error={!email && touched}
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="email"
            helperText={!email && touched ? "Field is required" : ""}
            fullWidth
            onBlur={(e) => setTouched(true)}
          />
          <TextField
            error={!password && touched}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            helperText={!password && touched ? "Field is required" : ""}
            fullWidth
            onBlur={(e) => setTouched(true)}
          />
          <Button variant="contained" color="primary">
            Sign in
          </Button>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Not a member?{" "}
            <Link to="/register" component={RouterLink} underline="hover">
              Register
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
}

export function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState(false);
  return (
    <div className="login-page-root">
      <Paper className="login-card" elevation={6}>
        <Stack spacing={2} sx={{ width: "320px" }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: "center", color: "#1e96fc" }}
          >
            Sign up
          </Typography>
          <TextField
            error={!firstName && touched}
            label="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
            type="text"
            helperText={!firstName && touched ? "Field is required" : ""}
            fullWidth
            onBlur={(e) => setTouched(true)}
          />
          <TextField
            error={!lastName && touched}
            label="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
            type="text"
            helperText={!lastName && touched ? "Field is required" : ""}
            fullWidth
            onBlur={(e) => setTouched(e.target.value)}
          />
          <TextField
            error={!lastName && touched}
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="email"
            helperText={!email && touched ? "Field is required" : ""}
            fullWidth
            onBlur={(e) => setTouched(e.target.value)}
          />
          <TextField
            error={!password && touched}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            helperText={!password && touched ? "Field is required" : ""}
            fullWidth
            onBlur={(e) => setTouched(e.target.value)}
          />
          <TextField
            error={!confirmPassword && touched}
            label="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            variant="outlined"
            type="password"
            helperText={!confirmPassword && touched ? "Field is required" : ""}
            fullWidth
            onBlur={(e) => setTouched(e.target.value)}
          />
          <Button variant="contained" color="primary">
            Sign up
          </Button>

          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Alredy a member?{" "}
            <Link to="/" component={RouterLink} underline="hover">
              Sign in
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
}
