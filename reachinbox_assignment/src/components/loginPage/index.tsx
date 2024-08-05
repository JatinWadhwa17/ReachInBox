"use client";
import { Button, Box, Typography, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import Footer from "../footer";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  const signIn = () => {
    const loginUrl =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com";
    window.location.href = loginUrl;
  };

  useEffect(() => {
    console.log("useEffect is running");

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    console.log(urlParams, "urllllllll");

    // Log the current URL and extracted token
    console.log("Current URL:", window.location.href);
    console.log("Extracted token:", token);

    if (token) {
      localStorage.setItem("authToken", token);
      console.log(
        "Token stored in localStorage:",
        localStorage.getItem("authToken")
      );
      router.push("/utilities");
    } else {
      console.error(
        "Token not found in the URL. Make sure the URL contains the token."
      );
    }
  }, [router]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create a new account
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={signIn}
            sx={{ mt: 3 }}
          >
            Sign Up with Google
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={() => router.push("/routes/mainPage")}
          >
            View Component
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={() => router.push("/routes/mainPage")}
          >
            Login
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
