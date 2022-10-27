import styled from '@emotion/styled';
import { Mail, NotAccessible, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import { useState } from 'react';

const Search=styled("div")(({theme})=>({
backgroundColor:"white",
padding:"0 10px",
borderRadius:'10px',
width:'30%'
}));

const Icons=styled(Box)(({theme})=>({
padding:"0 5px"
}));

const Navbar = () => {
    const [badge,setBadge]=useState(8);
    const [notify,setNotify]=useState(5);
    return (
        <AppBar position='sticky'>
            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                <Box><Typography sx={{display:{xs:'none',sm:'block'}}}>Borhan</Typography>
                <Pets sx={{display:{xs:'block',sm:'none'}}}></Pets></Box>
            <Search><InputBase placeholder='Search...'></InputBase></Search>
            <Icons sx={{display:'flex', gap:'15px', justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
            <Badge badgeContent={badge} color="error">
                <Mail />
                {/* <Notifications></Notifications> */}
            </Badge>
            <Badge badgeContent={notify} color="error">
                {/* <Mail /> */}
                <Notifications/>
            </Badge>
            <Avatar alt="Remy Sharp" src="https://glowing-semifreddo-77c56f.netlify.app/static/media/borhan.d87b28879c1a50ffbd3f.png" />
            </Icons>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;