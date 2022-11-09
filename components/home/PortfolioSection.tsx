import Image from 'next/legacy/image';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
  Button,
} from '@mui/material/';
import { ChevronRight, GitHub, Visibility } from '@mui/icons-material';

import Link from '../Link';
import ShortCenteredDivider from '../ui/ShortCenteredDivider';
import getDataUrlWithShimmerEffect from '../../utils/getDataUrlWithShimmerEffect';

interface Project {
  name: string;
  projectUrl: string;
  repoUrl: string;
  imgPath: string;
  imgAlt: string;
  summary: string;
  keyFeatures: string[];
  technologies: string[];
}

interface PortfolioData {
  portfolioTitle: string;
  projects: Project[];
}

export default function Portfolio({
  portfolioData: t,
}: {
  portfolioData: PortfolioData;
}) {
  return (
    <Box component="section" id="portfolio" sx={{ pb: 8, pt: 10 }}>
      <Container>
        <Typography gutterBottom align="center" component="h2" variant="h3">
          {t.portfolioTitle}
        </Typography>

        <ShortCenteredDivider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          {t.projects.map((project) => (
            <Grid key={project.name} item lg={12} sm={6} xs={12}>
              <Card
                elevation={4}
                sx={{
                  display: 'flex',
                  height: '100%',
                  flexDirection: {
                    xs: 'column',
                    lg: 'row',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    flex: {
                      lg: '1 1 600px',
                    },
                  }}
                >
                  <div>
                    <Image
                      alt={project.imgAlt}
                      blurDataURL={getDataUrlWithShimmerEffect(600, 370)}
                      height={370}
                      layout="responsive"
                      placeholder="blur"
                      src={`/${project.imgPath}`}
                      width={600}
                    />
                  </div>

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.7);',
                      opacity: 0,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <ButtonGroup variant="contained">
                      <Button
                        aria-label="Link to project GitHub repository"
                        component="a"
                        href={project.repoUrl}
                        rel="noopener"
                        startIcon={<GitHub />}
                        target="_blank"
                      >
                        Repo
                      </Button>
                      <Button
                        aria-label="Link to project live preview"
                        component="a"
                        href={project.projectUrl}
                        rel="noopener"
                        startIcon={<Visibility />}
                        target="_blank"
                      >
                        Live
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Box>

                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: {
                      lg: '80%',
                    },
                  }}
                >
                  <div>
                    <Link
                      gutterBottom
                      href={project.projectUrl}
                      rel="noopener"
                      sx={{ display: 'inline-block' }}
                      target="_blank"
                      underline="hover"
                      variant="h5"
                    >
                      {project.name}
                    </Link>
                    <Typography
                      color="textSecondary"
                      component="p"
                      variant="subtitle1"
                    >
                      {project.summary}
                    </Typography>

                    <List
                      dense
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > *': {
                          flex: {
                            xs: '0 0 100%',
                            lg: '0 0 50%',
                          },
                        },
                      }}
                    >
                      {project.keyFeatures.map((feature) => (
                        <ListItem key={feature}>
                          <ListItemIcon sx={{ minWidth: 34 }}>
                            <ChevronRight color="secondary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </div>

                  <div>
                    {project.technologies.map((e) => (
                      <Chip
                        key={e}
                        label={e}
                        size="small"
                        sx={{ m: 0.5 }}
                        variant="outlined"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
