import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/system";
import AddToolTip from "./components/AddToolTip";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
// import Sidebar from './components/Sidebar';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" gap="10px" justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <AddToolTip />
      </Box>
    </ThemeProvider>
  );
}

export default App;
