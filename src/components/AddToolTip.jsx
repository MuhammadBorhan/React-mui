import { AccountCircle, Add } from "@mui/icons-material";
import {
  Avatar,
  Fab,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const AddToolTip = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "15px",
        left: { xs: "calc(50% - 25px)", md: "5px" },
      }}
    >
      <Tooltip
        onClick={() => {
          setOpen(true);
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Box
          sx={{
            width: "300px",
            height: "300px",
            bgcolor: "white",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Typography sx={{ textAlign: "center", color: "gray" }}>
            Create a new post...{" "}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar
              alt="Borhan"
              src="https://glowing-semifreddo-77c56f.netlify.app/static/media/borhan.d87b28879c1a50ffbd3f.png"
            />
            <h3>Borhan</h3>
          </Box>
          <FormControl sx={{ marginTop: "30px", padding: "0 20px" }}>
            <InputLabel htmlFor="input-with-icon-adornment">
              What's on your mind?
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={<InputAdornment></InputAdornment>}
              sx={{ width: "250px" }}
            />
          </FormControl>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddToolTip;
