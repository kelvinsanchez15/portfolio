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

export default function About() {
  const classes = useStyles();

  return (
    <section id="about" className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              About me
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <Code color="secondary" />
                </ListItemIcon>
                <ListItemText primary="I'm a full stack developer based in Bolívar, Venezuela." />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Code color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="I like to design and build beautiful and functional websites and
              web applications, taking special care to produce clear and
              understandable code."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Code color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="I love teamwork and good communication, always open to feedback
              and willing to learn new things."
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Code color="secondary" />
                </ListItemIcon>
                <ListItemText primary="In my free time I like to play the guitar, travel and meet new people." />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              Resumé
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography component="h3" variant="h4" gutterBottom>
              You can check my resumé in the link below.
            </Typography>

            <Button
              className={classes.resumeBtn}
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<Description />}
              href="https://drive.google.com/file/d/1e5K-hbuE2y4yE_TXEXt3BXQcYuRdDcrn/view?usp=sharing"
              rel="noopener"
              target="_blank"
            >
              Resumé
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              Skills
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box className={classes.skills}>
              {skillIcons.map((skillIcon) => {
                return (
                  <div key={skillIcon.label} className={classes.skillIcon}>
                    {skillIcon.icon}
                  </div>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
