import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Badge from './Badgegroup.png';
import Mac from "./Mac.png"

export default function Hero() {
  return (
    <>
      <Container>
        <Box sx={{mt:8}}>
      <img src={Badge} />
      </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        
          <Box textAlign="center">
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 , mt:-5}}>Beautiful analytics to grow smarter</Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 4 }}>
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }} >
                <PlayArrowIcon sx={{ mr: 1 }} />
                Demo
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#7F56D9', color: 'white' }}>
                Sign up
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container>
  <Box sx={{
    height: '70vh',
    marginTop: 10,
    backgroundImage: `url(${Mac})`,
    backgroundSize: '140vh 80vh',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundPositionY: "5%",
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      backgroundSize: '100vw auto',
      height: '50vh'
    }
  }}>
  </Box>
</Container>


    </>
  );
}
