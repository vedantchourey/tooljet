import React from 'react';
import l from "./l.png"
import { Container, Grid, Typography, Link } from '@mui/material';

export default function Footer() {

  
  const products = [
    'Overview',
    'Features',
    'Solutions',
    'Tutorials',
    'Pricing',
    'Releases'
  ];

  const company = [
    'About Us',
    'Contact',
    'Careers',
    'Press',
    'News',
    'Contact'
  ];

  const resources = [
    'Blog',
    'Newsletter',
    'Events',
    'Help Center',
    'Tutorials',
    'Support'
  ];

  const useCases = [
    'Startups',
    'Enterprise',
    'Goverment',
    'SaaS',
    'Marketplaces',
    'Ecommerce'
  ];

  const social = [
    'Facebook',
    'Twitter',
    'Instagram',
    'LinkedIn',
    'GitHub',
    'Dribbble'
  ];

  const legal = [
    "Terms",
    'Privacy',
    'Licenses',
    'Trademarks',
    'Cookies',
    'Settings',
    'Contact'
  ];

  return (
<Container maxWidth="lg" sx={{ p:5}}>
  <Grid container spacing={3}>
    <Grid item xs={12} md={2}>
      <Typography variant="h6" gutterBottom>
        Products
      </Typography>
      <Grid container direction="column" spacing={1}>
        {products.map((product) => (
          <Grid item key={product}>
            <Link href="#" color="textSecondary" variant="body2" underline="none">
              {product}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12} md={2}>
      <Typography variant="h6" gutterBottom>
        Company
      </Typography>
      <Grid container direction="column" spacing={1}>
        {company.map((item) => (
          <Grid item key={item}>
            <Link href="#" color="textSecondary" variant="body2" underline="none">
              {item}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12} md={2}>
      <Typography variant="h6" gutterBottom>
        Resources
      </Typography>
      <Grid container direction="column" spacing={1}>
        {resources.map((item) => (
          <Grid item key={item}>
            <Link href="#" color="textSecondary" variant="body2" underline="none">
              {item}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12} md={2}>
      <Typography variant="h6" gutterBottom>
        Use Cases
      </Typography>
      <Grid container direction="column" spacing={1}>
        {useCases.map((useCase) => (
          <Grid item key={useCase}>
            <Link href="#" color="textSecondary" variant="body2" underline="none">
              {useCase}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12} md={2}>
      <Typography variant="h6" gutterBottom>
        Social
      </Typography>
      <Grid container direction="column" spacing={1}>
        {social.map((item) => (
          <Grid item key={item}>
            <Link href="#" color="textSecondary" variant="body2" underline="none">
              {item}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12} md={2}>
      <Typography variant="h6" gutterBottom>
        Legal
      </Typography>
      <Grid container direction="column" spacing={1}>
        {legal.map((item) => (
          <Grid item key={item}>
            <Link href="#" color="textSecondary" variant="body2" underline="none">
              {item}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
  <img src={l} style={{ position: 'relative',height:"20%",width:"90%",marginLeft:"10%" ,marginTop:"12%"}}/>
</Container>
  )
          }