import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
  Button,
} from "@material-ui/core/";

import { ChevronRight, GitHub, Visibility } from "@material-ui/icons";

import projects from "./constants/projects";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.grey[900],
  },
  divider: {
    height: "4px",
    width: "60px",
    backgroundColor: theme.palette.primary.main,
    margin: "auto",
  },
  cardStyle: {
    display: "flex",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  coverWrapper: {
    display: "flex",
    position: "relative",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7);",
    opacity: 0,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      opacity: 1,
    },
  },
  keyFeatures: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      display: "flex",
      flex: "0 0 50%",
    },
    [theme.breakpoints.down("sm")]: {
      "& > *": {
        display: "flex",
        flex: "0 0 100%",
      },
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <section id="portfolio" className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h3" align="center" gutterBottom>
              Portfolio
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          {projects.map((project) => {
            return (
              <Grid item lg={12} sm={6} xs={12} key={project.name}>
                <Card elevation={4} className={classes.cardStyle}>
                  <div className={classes.coverWrapper}>
                    <CardMedia
                      component="img"
                      className={classes.cover}
                      alt={project.imgAlt}
                      image={project.imgPath}
                      width="600"
                      height="381"
                      loading="lazy"
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
                        {project.keyFeatures.map((feature) => {
                          return (
                            <ListItem key={feature}>
                              <ListItemIcon>
                                <ChevronRight color="secondary" />
                              </ListItemIcon>
                              <ListItemText primary={feature} />
                            </ListItem>
                          );
                        })}
                      </List>
                    </div>

                    <div>
                      {project.technologies.map((e) => {
                        return (
                          <Chip
                            variant="outlined"
                            size="small"
                            label={e}
                            key={e}
                            className={classes.chip}
                          />
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
