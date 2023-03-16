import React, { useState } from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import QuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QouteAvatar from './QouteAvatar.png';
import Image2 from './Image2.png';
import Image1 from './Image1.png';
import Image3 from './Image3.png';
import Image4 from './Image4.png';

export default function Quote() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      Logo: Image2,
      quote: 'Your Quote Here 1',
      position: 'Position 1, Company 1',
      image: QouteAvatar,
    },
    {
      Logo: Image1,
      quote: 'Your Quote Here 2',
      position: 'Position 2, Company 2',
      image: QouteAvatar,
    },
    {
      Logo: Image3,
      quote: 'Your Quote Here 3',
      position: 'Position 3, Company 3',
      image: QouteAvatar,
    },
    {
      Logo: Image4,
      quote: 'Your Quote Here 4',
      position: 'Position 4, Company 4',
      image: QouteAvatar,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentQuote(next),
  };

  return (
    <Box
  sx={{
    bgcolor: '#f9fafb',
    py: 10,
    overflow: 'hidden',
    
  }}
>
  <Slider {...settings}>
    {quotes.map((q, index) => (
      <Box key={index}>
        <Box sx={{ position: "relative", right: "50%", left: "50%" }}>
          <img src={q.Logo} alt={`Image ${index + 1}`} />
        </Box>
        <Container maxWidth="sm">
          <Box sx={{ position: "relative", right: "80%", left: "10%" , mb: 2, mt: 2 }}>
            <Box sx={{ mr: 2 }}>
              <QuoteIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {q.quote}
            </Typography>
            <Box sx={{ ml: 2 }}>
              <QuoteIcon sx={{ fontSize: 40 }} />
            </Box>
          </Box>
          <Box sx={{  position: "relative", right: "45%", left: "55%" , mb: 2,mt:2}}>
            <Avatar src={q.image} sx={{ width: 56, height: 56, mr: 3 }} />
          </Box>
          <Typography variant="subtitle1" sx={{  position: "relative", right: "90%", left: "10%" , mb: 2,mt:2}}>{q.position}</Typography>
        </Container>
      </Box>
    ))}
  </Slider>
</Box>
  );
}