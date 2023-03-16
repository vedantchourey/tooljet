import React from 'react';
import Grid from '@mui/material/Grid';
import Image1 from './Image1.png';
import Image2 from './Image2.png';
import Image3 from './Image3.png';
import Image4 from './Image4.png';
import Image5 from './Image5.png';

export default function Social() {
  const images = [Image1, Image2, Image3, Image4, Image5];

  return (
    <div style={{ flexGrow: 1, margin: '16px' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" flexWrap="nowrap">
        {images.map((image, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2} sx={{ textAlign: 'center' }}>
            <img src={image} alt={`Image ${index+1}`} style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}