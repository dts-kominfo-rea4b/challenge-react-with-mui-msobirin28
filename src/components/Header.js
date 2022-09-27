// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Divider, Typography } from "@mui/material";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div>
      <Typography variant="h1" component="h2">
        Call a Friend
      </Typography>
      <Divider sx={{ fontSize: "20px", marginTop: "10px" }}>Your friendly contact app</Divider>
    </div>
  );
};

export default Header;
