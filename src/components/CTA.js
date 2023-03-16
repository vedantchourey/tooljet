import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CTA() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        bgcolor: '#F8FAFC',
        textAlign: 'center',
        mb: 4,
        p: 10,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Start Your Free Trial
      </Typography>
      <Typography variant="body1" gutterBottom>
        Join over 4000 plus startups already growing with untitled
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="outlined" sx={{ mr: 2, bgcolor: '#FFFFFF', color: '#D0D5DD' }}>
          Learn More
        </Button>
        <Button variant="contained" sx={{ bgcolor: '#7F56D9' }}>
          Get Started
        </Button>
      </Box>
    </Box>
  );
}