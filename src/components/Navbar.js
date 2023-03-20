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
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

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
            <Box sx={{ flexGrow: 2, ml: 2 , p:2 , cursor: 'pointer' ,borderRadius: '5px',
    transition: 'background-color 0.3s ease-in-out', '&:hover': {
      backgroundColor: '#f2f2f2'
    }  }}>
            <Typography variant="h7" color="black" component="div">
                Home
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 2, ml: 2, p: 2, cursor: 'pointer', borderRadius: '5px', transition: 'background-color 0.3s ease-in-out', '&:hover': { backgroundColor: '#f2f2f2' } }} onClick={() => setProductsOpen(!productsOpen)}>
            <Typography variant="h7" color="black" component="div">
                Products
            </Typography>
            {productsOpen && (
        <Box sx={{ position: 'absolute', top: '100%', minWidth: '200px', backgroundColor: '#fff', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '5px', zIndex: 1 }}>
            <List>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Overview" color="black" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Features"  color="black"/>
                </ListItem>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Solutions" color="black" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Tutorials"  color="black"/>
                </ListItem>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Pricing"  color="black"/>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                    <ListItemText primary="Releases" color="black"/>
                </ListItem>
            </List>
        </Box>
    )}
            </Box>
            <Box sx={{ flexGrow: 2, ml: 2, p: 2, cursor: 'pointer', borderRadius: '5px', transition: 'background-color 0.3s ease-in-out', '&:hover': { backgroundColor: '#f2f2f2' } }} onClick={() => setResourcesOpen(!resourcesOpen)}>
  
            <Typography variant="h7" color="black" component="div">
                Resources
            </Typography>
            {resourcesOpen && (
        <Box sx={{ position: 'absolute', top: '100%', minWidth: '200px', backgroundColor: '#fff', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '5px', zIndex: 1 }}>
            <List>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Blog" color="black" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Newsletter"  color="black"/>
                </ListItem>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Events" color="black" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Help Center"  color="black"/>
                </ListItem>
                <ListItem button onClick={toggleDrawer} color="black">
                    <ListItemText primary="Tutorials"  color="black"/>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                    <ListItemText primary="Support" color="black"/>
                </ListItem>
            </List>
        </Box>
    )}
            </Box>
            <Box sx={{ flexGrow: 2, ml: 2 , p:2 , cursor: 'pointer' ,borderRadius: '5px',
    transition: 'background-color 0.3s ease-in-out', '&:hover': {
      backgroundColor: '#f2f2f2'
    }  }}>
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