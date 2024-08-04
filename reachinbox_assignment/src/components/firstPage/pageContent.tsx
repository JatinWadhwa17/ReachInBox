// components/MainContent.js
import React from "react";
import { Box, Typography } from "@mui/material";

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, marginLeft: 240 }}
    >
      <Typography variant="h4" gutterBottom>
        It’s the beginning of a legendary sales pipeline
      </Typography>
      <Typography variant="body1">
        When you have inbound E-mails you’ll see them here
      </Typography>
    </Box>
  );
};

export default MainContent;
