// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Box, Divider, List, ListItem, Typography, ListItemAvatar, ImageIcon, ListItemText } from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <div>
      <List sx={{ minWidth: 275, backgroundColor: "#DBF6F0", padding: "5px" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={data.photo} sx={{ width: 80, height: 80 }} />
          </ListItemAvatar>
          <Box sx={{ marginLeft: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>{data.name}</Typography>
            <Typography sx={{ color: "#6e6c69" }}>{data.phone}</Typography>
            <Typography sx={{ color: "#6e6c69" }}>{data.email}</Typography>
          </Box>
        </ListItem>
        <Divider light />
      </List>
    </div>
  );
};

export default Contact;
