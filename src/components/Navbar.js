import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Logo from './Logo.png';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <Box >
        <AppBar position="static" sx={{ backgroundColor: 'white'  }}>
          <Toolbar variant="dense">
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Typography variant="h6" color="black" component="div">
            <img src={Logo} />
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ flexGrow: 1, ml: 3 }}>
            <Typography variant="h7" color="black" component="div">
                Home
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, ml: 1 }}>
            <Typography variant="h7" color="black" component="div">
                Products
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, ml: 2 }}>
            <Typography variant="h7" color="black" component="div">
                Resources
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, ml: 2 }}>
            <Typography variant="h7" color="black" component="div">
                Pricing
            </Typography>
            </Box>
        </Box>
        </Box>
            <IconButton edge="start" color="black" aria-label="menu" sx={{ mr: 2 }}>
              <PermIdentityIcon />
            </IconButton>
            <IconButton
              edge="start"
              color="black"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <List sx={{ width: '200px' }}>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Pricing" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}