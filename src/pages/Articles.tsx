import React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Articles: React.FC = () => {
  const { t } = useTranslation();

  const articles = [
    {
      title: t('The Role of AI in Carbon Emissions Reduction'),
      summary: t('Explore how artificial intelligence is revolutionizing the way we approach carbon emissions reduction and sustainability efforts.'),
      link: '#',
    },
    {
      title: t('Understanding Carbon Credit Markets'),
      summary: t('A comprehensive guide to carbon credit markets, their importance in fighting climate change, and how they operate.'),
      link: '#',
    },
    {
      title: t('Sustainable Practices for Businesses'),
      summary: t('Learn about effective sustainable practices that businesses can adopt to reduce their carbon footprint and contribute to a greener future.'),
      link: '#',
    },
    {
      title: t('The Future of AI in Environmental Sustainability'),
      summary: t('Discover the potential future applications of AI in environmental sustainability and how it could shape our approach to climate change.'),
      link: '#',
    },
  ];

  return (
    <Container maxWidth="lg" className="mt-8">
      <Typography variant="h3" component="h1" gutterBottom>
        {t('Articles')}
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.summary}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={article.link}>
                  {t('Read More')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;