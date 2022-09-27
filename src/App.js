import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import { Box } from "@mui/material";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import { useState } from "react";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [dataContact, setContact] = useState(contactsJSON);
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const handleSubmit = (newContact) => {
    setContact([...dataContact, newContact]);
  };
  return (
    <div className="App">
      <Header />
      <Box sx={{ display: "flex", width: "100%", padding: "5em 2em" }}>
        <Box sx={{ width: "40%" }}>
          <ContactForm handleSubmit={handleSubmit} />
        </Box>
        <Box sx={{ width: "45%", marginLeft: 10 }}>
          {dataContact.map((data, i) => (
            <Contact key={i} data={data} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default App;
