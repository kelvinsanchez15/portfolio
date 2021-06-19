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

import getDataUrlWithShimmerEffect from '../../utils/getDataUrlWithShimmerEffect';

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
    <section className={classes.root} id="portfolio">
      <Container className={classes.container}>
        <Grid container className={classes.grid} spacing={4}>
          <Grid item xs={12}>
            <Typography gutterBottom align="center" component="h2" variant="h3">
              {t.portfolioTitle}
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          {t.projects.map((project) => (
            <Grid key={project.name} item lg={12} sm={6} xs={12}>
              <Card className={classes.cardStyle} elevation={4}>
                <div className={classes.mediaWrapper}>
                  <Image
                    alt={project.imgAlt}
                    blurDataURL={getDataUrlWithShimmerEffect(600, 370)}
                    className={classes.media}
                    height={370}
                    layout="responsive"
                    placeholder="blur"
                    src={`/${project.imgPath}`}
                    width={600}
                  />

                  <div className={classes.overlay}>
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
                  </div>
                </div>

                <CardContent className={classes.content}>
                  <div>
                    <Typography gutterBottom component="h3" variant="h5">
                      {project.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      component="p"
                      variant="subtitle1"
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
                        key={e}
                        className={classes.chip}
                        label={e}
                        size="small"
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
    </section>
  );
}
