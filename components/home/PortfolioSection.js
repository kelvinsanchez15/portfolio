import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
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

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.grey[900],
  },
  cardStyle: {
    display: "flex",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cover: {
    width: 400,
  },
  keyFeatures: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      display: "flex",
      flex: "0 0 50%",
    },
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
}));

const projects = [
  {
    name: "Anonymous Message Board",
    projectUrl: "https://anonymous-message-board-kel.glitch.me",
    repoUrl: "https://github.com/kelvinsanchez15/anonymous-message-board",
    imgPath: "projectMedia/anonymous-message-board.jpg",
    imgAlt: "Anonymous message board preview",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    keyFeatures: [
      "CRUD API",
      "Server side rendering",
      "Flash alerts",
      "Quality assurance",
      "Dark theme",
    ],
    technologies: ["Express", "Node", "MongoDB", "PUG"],
  },
  {
    name: "Issue Tracker",
    projectUrl: "https://issue-tracker-kel.glitch.me",
    repoUrl: "https://github.com/kelvinsanchez15/issue-tracker",
    imgPath: "projectMedia/issue-tracker.jpg",
    imgAlt: "Issue tracker preview",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    keyFeatures: ["CRUD API", "Filters", "Relative time", "Test enviroment"],
    technologies: ["Express", "Node", "MongoDB", "PUG"],
  },
  {
    name: "Choropleth Map",
    projectUrl: "https://anonymous-message-board-kel.glitch.me",
    repoUrl: "https://github.com/kelvinsanchez15/choropleth-map",
    imgPath: "projectMedia/choropleth-map.jpg",
    imgAlt: "Choropleth map preview",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    keyFeatures: [
      "Data visualization",
      "Color legend",
      "Data tooltip",
      "Dark theme",
    ],
    technologies: ["Vanilla JS", "D3"],
  },
  {
    name: "JavaScript Calculator",
    projectUrl: "https://anonymous-message-board-kel.glitch.me",
    repoUrl: "https://github.com/kelvinsanchez15/javascript-calculator",
    imgPath: "projectMedia/javascript-calculator.jpg",
    imgAlt: "JavaScript calculator preview",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    keyFeatures: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["React"],
  },
];

export default function Portfolio() {
  const classes = useStyles();

  return (
    <section id="portfolio" className={classes.root}>
      <Container>
        <Typography component="h2" variant="h3" align="center" gutterBottom>
          Portfolio
        </Typography>

        <Grid container spacing={5}>
          {projects.map((project) => {
            return (
              <Grid item xs={12} key={project.name}>
                <Card elevation={4} className={classes.cardStyle}>
                  <CardMedia
                    component="img"
                    className={classes.cover}
                    alt={project.imgAlt}
                    width="400"
                    height="300"
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
                                <ChevronRightIcon color="primary" />
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
                            color="primary"
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
