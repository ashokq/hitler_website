import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>About QuickServe</Typography>
      <Typography variant="body1">
        QuickServe is dedicated to providing fast and reliable grocery and food delivery services,
        as well as a rapid transport feature to make your life easier.
      </Typography>
    </Container>
  );
};

export default AboutUs;
