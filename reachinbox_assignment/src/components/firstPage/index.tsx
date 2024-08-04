// components/Layout.js
"use client";
import React, { useState } from "react";
import Sidebar from "./sideBar";
import MainContent from "./pageContent";
import { Box } from "@mui/material";

const Layoutt = () => {
  const [content, setContent] = useState(<MainContent />);
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar setContent={setContent} />
      {content}
    </Box>
  );
};

export default Layoutt;
