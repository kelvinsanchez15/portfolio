import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Divider,
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
} from '@material-ui/core/';

import { ChevronRight, GitHub, Visibility } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.grey[900],
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  grid: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      margin: 0,
      width: '100%',
      '& > .MuiGrid-item': {
        padding: theme.spacing(2, 0),
      },
    },
  },
  divider: {
    height: '4px',
    width: '60px',
    backgroundColor: theme.palette.primary.main,
    margin: 'auto',
  },
  cardStyle: {
    display: 'flex',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
  },
  mediaWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      flex: '1 1 600px',
    },
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
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
  },
  keyFeatures: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      display: 'flex',
      flex: '0 0 50%',
    },
    [theme.breakpoints.down('sm')]: {
      '& > *': {
        display: 'flex',
        flex: '0 0 100%',
      },
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

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
  const classes = useStyles();

  return (
    <section id="portfolio" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4} className={classes.grid}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h3" align="center" gutterBottom>
              {t.portfolioTitle}
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          {t.projects.map((project) => (
            <Grid item lg={12} sm={6} xs={12} key={project.name}>
              <Card elevation={4} className={classes.cardStyle}>
                <div className={classes.mediaWrapper}>
                  <Image
                    className={classes.media}
                    src={`/${project.imgPath}`}
                    alt={project.imgAlt}
                    layout="responsive"
                    width={600}
                    height={370}
                  />

                  <div className={classes.overlay}>
                    <ButtonGroup variant="contained">
                      <Button
                        href={project.repoUrl}
                        rel="noopener"
                        target="_blank"
                        component="a"
                        aria-label="Link to project GitHub repository"
                        startIcon={<GitHub />}
                      >
                        Repo
                      </Button>
                      <Button
                        href={project.projectUrl}
                        rel="noopener"
                        target="_blank"
                        component="a"
                        aria-label="Link to project live preview"
                        startIcon={<Visibility />}
                      >
                        Live
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>

                <CardContent className={classes.content}>
                  <div>
                    <Typography component="h3" variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography
                      component="p"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {project.summary}
                    </Typography>

                    <List dense className={classes.keyFeatures}>
                      {project.keyFeatures.map((feature) => (
                        <ListItem key={feature}>
                          <ListItemIcon>
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
                        variant="outlined"
                        size="small"
                        label={e}
                        key={e}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
