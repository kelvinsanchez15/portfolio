import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Divider,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core/";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  separator: {
    height: "4px",
    width: "60px",
    backgroundColor: "#4f4f4f",
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
            <Divider className={classes.separator} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography component="h4" variant="h5" gutterBottom>
              I&apos;m a full stack developer who loves to build simple and
              beautiful things
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              Languages
            </Typography>
            <Divider className={classes.separator} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography component="h4" variant="h5" gutterBottom>
              I utilize the following programming languages to build websites.
            </Typography>

            <Grid container>
              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  - HTML5
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  - CSS3
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  - SAAS
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  - JavaScript
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="h2" variant="h3" gutterBottom>
              My stack
            </Typography>
            <Divider className={classes.separator} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography component="h4" variant="h5" gutterBottom>
              Something something MERN stack.
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText primary="MongoDB" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText primary="Express" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText primary="React" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText primary="Node" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
