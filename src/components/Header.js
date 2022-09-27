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
      <Typography variant="h3" component="h4" sx={{ marginTop: "10px" }}>
        Call a Friend
      </Typography>
      <Divider sx={{ fontSize: "15px", marginTop: "10px" }}>Your friendly contact app</Divider>
    </div>
  );
};

export default Header;
