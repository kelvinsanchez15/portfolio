import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Divider,
  Typography,
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";

import { Code, Description } from "@material-ui/icons";

import skillIcons from "./constants/skillIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  divider: {
    height: "4px",
    width: "60px",
    backgroundColor: theme.palette.primary.main,
  },
  resumeBtn: {
    margin: "1rem",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: "4rem",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-around",
    },
  },
  skillIcon: {
    marginRight: "1.3rem",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 0.4rem",
    },
  },
}));

export default function About({ aboutData }) {
  const classes = useStyles();
  const {
    aboutTitle,
    aboutItems,
    resumeTitle,
    resumeParagraph,
    resumeButton,
    resumeLink,
    skillsTitle,
  } = aboutData;

  return (
    <section id="about" className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              {aboutTitle}
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <List disablePadding>
              {aboutItems.map((item) => (
                <ListItem key={item}>
                  <ListItemIcon>
                    <Code color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              {resumeTitle}
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography component="h3" variant="h4" gutterBottom>
              {resumeParagraph}
            </Typography>

            <Button
              className={classes.resumeBtn}
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<Description />}
              href={resumeLink}
              rel="noopener"
              target="_blank"
            >
              {resumeButton}
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              {skillsTitle}
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box className={classes.skills}>
              {skillIcons.map((skillIcon) => (
                <div key={skillIcon.label} className={classes.skillIcon}>
                  {skillIcon.icon}
                </div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
