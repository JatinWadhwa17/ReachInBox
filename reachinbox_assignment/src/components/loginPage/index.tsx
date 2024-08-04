"use client";
import { Button, Box, Typography, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import Footer from "../footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get("../pages/api/token");
        setToken(response.data.token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);
  console.log(token, "token");

  const signIn = () => {};

  useEffect(() => {
    console.log("useEffect is running");

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    localStorage.setItem("authToken", token);

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
            onClick={() => router.push("/login")}
          >
            Sign In
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
