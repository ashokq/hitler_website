import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactUs = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary" type="submit">Send Message</Button>
      </form>
    </Container>
  );
};

export default ContactUs;
