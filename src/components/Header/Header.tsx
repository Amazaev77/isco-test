import {AppBar, Box, Tabs} from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%'}}>
      <AppBar position="static">
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default Header;
