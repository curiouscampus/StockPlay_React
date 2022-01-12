import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useAlert } from "react-alert";
import { serverUrl } from "../../../constants";
import { CircularProgress } from "@mui/material";

import Box from "@mui/material/Box";
import PasswordTwoToneIcon from "@mui/icons-material/PasswordTwoTone";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSearchParams } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a href="https://www.curiouscampus.com/">Curious Campus</a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const alert = useAlert();
  const [loading, setLoading] = React.useState(false);

  let email = searchParams.get("email");

  const fetchData = (email, Otp, password) => {
    setLoading(true);
    axios
      .post(serverUrl + "/api/reset_password", {
        password,
        Otp,
        email,
      })
      .then((res) => {
        setLoading(false);
        alert.success("Reset Link Sent");
        return;
        // navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert.error(err.response.data.message);
        return;
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(email, data.get("otp"), data.get("password"));
    // eslint-disable-next-line no-console
    if (email && data.get("otp") && data.get("password")) {
      fetchData(email, data.get("otp"), data.get("password"));
    }
  };

  React.useEffect(() => {
    console.log(email);
  });

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PasswordTwoToneIcon sx={{ fontSize: 80 }} />
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              disabled
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="otp"
              label="OTP"
              name="otp"
              autoComplete="otp"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="New Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, padding: 2 }}
            >
              Reset Password
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    );
  }
}
