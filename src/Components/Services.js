import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const Services = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
      <List>
        <ListItem>Grocery Delivery: Fresh produce and essentials at your doorstep.</ListItem>
        <ListItem>Food Delivery: Order from your favorite restaurants.</ListItem>
        <ListItem>Rapid Transport: Fast and efficient delivery services.</ListItem>
      </List>
    </Container>
  );
};

export default Services;
