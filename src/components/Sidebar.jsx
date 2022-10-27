import { AccountBoxOutlined, Article, Group, Home, Pages, Settings, Store } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{display:{xs:'none',sm:'none',md:'block'}}}>
            <List>
          <ListItem sx={{display:'flex',flexDirection:'column',alignItems:'start'}} disablePadding>
            <ListItemButton component='a' href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            <ListItemButton component='b' href="#page">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
            <ListItemButton component='c' href="#Group">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
            <ListItemButton component='d' href="#Store">
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
            <ListItemButton component='e' href="#profile">
              <ListItemIcon>
                <AccountBoxOutlined />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItemButton component='f' href="#setting">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
    );
};

export default Sidebar;