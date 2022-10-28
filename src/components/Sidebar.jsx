import {
  AccountBoxOutlined,
  Article,
  Group,
  Home,
  Label,
  ModeNight,
  Pages,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({ mode, setMode }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
            disablePadding
          >
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            <ListItemButton component="b" href="#page">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
            <ListItemButton component="c" href="#Group">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
            <ListItemButton component="d" href="#Store">
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
            <ListItemButton component="e" href="#profile">
              <ListItemIcon>
                <AccountBoxOutlined />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItemButton component="f" href="#setting">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
            <ListItemButton component="f" href="#setting">
              <ListItemIcon>
                <ModeNight></ModeNight>
              </ListItemIcon>
              <Switch
                onChange={() => {
                  setMode(mode === "light" ? "dark" : "light");
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
