import { Button, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary">
        Setting
      </Button>
      <Button startIcon={<Add />} variant="contained" color="secondary">
        Add
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>

      <Typography variant="p" component="h1">
        h1. Heading
      </Typography>

      <p>borhan</p>
      <h1>boahan</h1>
      <p>borhan</p>
      <div></div>
      <p></p>
      <h1></h1>
    </div>
  );
}

export default App;
