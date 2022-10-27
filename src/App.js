import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/system";
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box sx={{ padding: "0 40px" }}>
      <Navbar />
      <Stack direction="row" gap="10px" justifyContent="space-between">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Box>
  );
}

export default App;
