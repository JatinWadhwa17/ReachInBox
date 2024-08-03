// components/Footer.js
import { Box, Typography, Link, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        position: "fixed",
        bottom: 0,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          © 2024 Reachinbox. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Built with "}
          <Link color="inherit" href="https://nextjs.org/">
            Next.js
          </Link>
          {" and "}
          <Link color="inherit" href="https://mui.com/">
            Material-UI
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
