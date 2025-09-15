import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-page-root">
      <Paper className="login-card" elevation={6}>
        <Stack spacing={2} sx={{ width: '320px' }}>
          <Typography variant="h5" component="h1" sx={{ textAlign: 'center' }}>Sign in</Typography>
          <TextField label="Email" variant="outlined" type="email" fullWidth />
          <TextField label="Password" variant="outlined" type="password" fullWidth />
          <Button variant="contained" color="primary">Sign in</Button>

          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Not a member?{' '}
            <Link href="#" underline="hover">
              Register
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
}
