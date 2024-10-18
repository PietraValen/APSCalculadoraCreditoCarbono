import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const teamMembers = [
    { name: 'John Doe', role: 'Lead Developer', email: 'john@example.com' },
    { name: 'Jane Smith', role: 'AI Specialist', email: 'jane@example.com' },
    { name: 'Mike Johnson', role: 'Environmental Scientist', email: 'mike@example.com' },
  ];

  return (
    <Container maxWidth="md" className="mt-8">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-6">
            <Typography variant="h4" component="h1" gutterBottom>
              {t('Contact Us')}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={t('Name')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t('Email')}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t('Message')}
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button type="submit" variant="contained" color="primary" className="mt-4">
                {t('Send Message')}
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-6">
            <Typography variant="h4" component="h2" gutterBottom>
              {t('Our Team')}
            </Typography>
            {teamMembers.map((member, index) => (
              <div key={index} className="mb-4">
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body1">{member.role}</Typography>
                <Typography variant="body2">{member.email}</Typography>
              </div>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;