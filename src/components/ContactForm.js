// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Button, TextField } from "@mui/material";
import React, { useState, Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState("Nina");
  const [email, setEmail] = useState("nina@email.com");
  const [phone, setPhone] = useState("081234528341");
  const [photo, setPhoto] = useState("http://placekitten.com/200");

  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const handleChange = (event) => {
    event.preventDefault();
    let data = {
      name,
      email,
      phone,
      photo,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <Card sx={{ minWidth: 275, backgroundColor: "#F3F1EB", textAlign: "left" }}>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <TextField label="Name" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Phone" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={phone} onChange={(e) => setPhone(e.target.value)} />
            <TextField label="Email" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Photo" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={photo} onChange={(e) => setPhoto(e.target.value)} />
          </CardContent>
          <Button type="submit" color="success" sx={{ marginLeft: 3, marginBottom: 2 }}>
            ADD NEW
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default ContactForm;
