import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  IconButton,
  Button,
  Avatar
} from '@mui/material';
import Avatargroup from './Avatargroup.png';
import { ExpandMore } from '@mui/icons-material';

const questions = [
  {
    question: 'Is there a free trial available?',
    description:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'What is your cancellation policy?',
    description:
      'You can cancel your subscription at any time from your account settings page. We’ll be sorry to see you go, but we’ll make the process as smooth as possible.',
  },
  {
    question: 'Can other info be added to an invoice?',
    description:
      'We accept all major credit and debit cards, as well as PayPal. If you have any questions about payment options, please contact us.',
  },
  {
    question: 'How does billing work?',
    description:
      'We accept all major credit and debit cards, as well as PayPal. If you have any questions about payment options, please contact us.',
  },
  {
    question: 'How do I change my account email?',
    description:
      'We accept all major credit and debit cards, as well as PayPal. If you have any questions about payment options, please contact us.',
  },
];


export default function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box mb={4}>
  <Box textAlign="center" sx={{p:20}}>
    <Typography variant="h4" gutterBottom>
      Frequently Asked Questions
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
      Everything you need to know about the product and billing.
    </Typography>
  </Box>
  <Box sx={{p: 10}}>
  {questions.map((item, index) => (
    <Accordion
      key={index}
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
      elevation={0}
      sx={{ mb: 4,mt:2 }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1">{item.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">{item.description}</Typography>
      </AccordionDetails>
    </Accordion>
  ))}
  </Box>
  <Box sx={{p: 10}}>
  <Box
        sx={{
          backgroundColor: '#F9FAFB',
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        
        <Avatar
          src={Avatargroup}
          alt="Avatar"
          sx={{ width: '170px', height: '100px', mb: '20px', mt: 4 }}
        />
        <Typography variant="h5" gutterBottom>
          Still have questions?
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" textAlign="center">
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: '20px', bgcolor: '#7F56D9', color: 'white' , mb: 4 }}
        >
          Get in touch
        </Button>
        
      </Box>
      </Box>
       </Box>
  )}