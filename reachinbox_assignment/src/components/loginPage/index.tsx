"use client";
import { Button, Box, Typography, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import Footer from "../footer";

export default function Login() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    // Redirect to Google sign-in page
    // This should be handled by your backend or an OAuth provider
    router.push("https://accounts.google.com/o/oauth2/auth");
  };

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
            onClick={handleGoogleSignIn}
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
