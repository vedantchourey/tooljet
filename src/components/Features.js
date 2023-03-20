import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button ,Avatar} from '@mui/material';
import { styled } from '@mui/material/styles';
import Symbol1 from './symbol1.png';
import Symbol2 from './symbol2.png';
import Symbol3 from './symbol3.png';
import Image from './Badge.png';
import Image1 from './f1.png';
import Image2 from './f2.png';



const StyledCard = styled(Card)({
  borderRadius: '16px',
  boxShadow: 'none',
  maxWidth: 400,
  margin: '0 auto',
  
  
});


const cards = [{
  "cardsymbol" :  Symbol1,
  "Title" : "Share team inboxes",
  "Description" : "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
}, {
  "cardsymbol" : Symbol2,
  "Title" : "Deliver instant answers",
  "Description" : "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
},
{
  "cardsymbol" : Symbol3,
  "Title" : "Manage your team with reports",
  "Description" : "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
},
];

export default function Features() {
  return (
    <Box bgcolor="#FFFFFF" py={10}>
      <Box textAlign="center">
        <Box sx={{ mb: 4 ,transition: 'transform 0.2s ease-in-out',
          '&:hover': {
        transform: 'scale(1.1)'}}
      }>
          <img src={Image} alt="Feature" style={{
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
              transform: 'scale(1.1)'
            }
            }} />
        </Box>
        
          <Typography variant="h4" gutterBottom>
          Cutting-edge features for advanced analytics
          </Typography>
        
        <Typography variant="subtitle1" color="textSecondary">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </Typography>
      </Box>
      <Box mt={10} textAlign="center">
        <Grid container spacing={2}>
          <img src={Image1} alt="Feature1" style={{ position: 'relative',  zIndex: 1 ,height:"33%",width:"25%",marginLeft:"10%" ,marginTop:"12%" ,
        
        
        }} />
          <img src={Image2} alt="Feature2" style={{ position: 'absolute', zIndex: 0 , width:"80%", marginLeft:"20%" }} />
        </Grid>
      </Box>
      <Box mt={5}>
        <Grid container spacing={2} sx={{ mt: 3, justifyContent: 'center'}}>
          {cards.map((card, index) => (
            <Grid item xs={10} md={6} key={index} flexWrap={"wrap"}>
              <StyledCard>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={card.cardsymbol}
                    alt={card.cardsymbol}
                    sx={{ ml: '150px'}}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    {card.Title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {card.Description}
                  </Typography>
                </CardContent>
                <Box flexGrow={1} />
                <Box m={2}>
                  <Button variant="outlined" color="primary">
                    Learn more &rarr;
                  </Button>
                </Box>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      <style jsx>{`
        @media (max-width: 600px) {
          img[src="${Image1}"] {
            left: 40%;
          }
          img[src="${Image2}"] {
            display: none;
          }
        }
      `}</style>
    </Box>
  )}
