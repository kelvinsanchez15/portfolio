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
} from "@material-ui/core/";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cover: {
    display: "flex",
    flex: "0 0 10%",
  },
  keyFeatures: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      display: "flex",
      flex: "0 0 50%",
    },
    [theme.breakpoints.down("xs")]: {
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
              <Grid item xs={12} key={project.name}>
                <Card elevation={4} className={classes.cardStyle}>
                  <CardMedia
                    component="img"
                    className={classes.cover}
                    alt={project.imgAlt}
                    width="400"
                    image={project.imgPath}
                  />

                  <CardContent className={classes.content}>
                    <div>
                      <Typography component="h4" variant="h5" gutterBottom>
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
                                <ChevronRightIcon color="secondary" />
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
