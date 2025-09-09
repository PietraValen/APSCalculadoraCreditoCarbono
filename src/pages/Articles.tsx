import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Articles: React.FC = () => {
  const { t } = useTranslation();

  const articles = [
    {
      title: t(
        "Unlocking Climate Solutions: Carbon Credits, Offsets, and Clean Development Mechanism"
      ),
      summary: t(
        "Explore the role of carbon credits and the Clean Development Mechanism (CDM) in incentivizing emission reductions, promoting sustainable practices, and fostering global cooperation for climate solutions."
      ),
      link: "https://thebioscan.com/index.php/pub/article/view/2515",
    },
    {
      title: t(
        "Economia de baixo carbono no Brasil: alternativas de políticas e custos de redução de emissões de gases de efeito estufa"
      ),
      summary: t(
        "Um dos efeitos mais discutidos da atividade econômica sobre o meio-ambiente e que tem tomado novas dimensões, seja na magnitude, na escala geográfica ou na variedade de atores políticos envolvidos, são as mudanças climáticas originadas pela acumulação de gases de efeito estufa (GEE)."
      ),
      link: "https://repositorio.ufmg.br/handle/1843/AMSA-9GXQ2U",
    },
    {
      title: t("Sustainable Practices for Businesses"),
      summary: t(
        "Learn about effective sustainable practices that businesses can adopt to reduce their carbon footprint and contribute to a greener future."
      ),
      link: "https://adelpha-api.mackenzie.br/server/api/core/bitstreams/e318aacb-003e-411d-83a6-586c77bca9dc/content",
    },
    {
      title: t("The Future of AI in Environmental Sustainability"),
      summary: t(
        "Discover the potential future applications of AI in environmental sustainability and how it could shape our approach to climate change."
      ),
      link: "https://www.technologyreview.com/2021/12/15/1042025/artificial-intelligence-climate-change/",
    },
  ];

  return (
    <Container maxWidth="lg" className="mt-8">
      <Typography variant="h3" component="h1" gutterBottom>
        {t("Articles")}
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
                  {t("Read More")}
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
