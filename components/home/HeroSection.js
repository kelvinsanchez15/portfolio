import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Typography, Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.grey[900],
  },
  wrapper: {
    marginBottom: theme.spacing(7),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <section id="home" className={classes.root}>
      <Container>
        <div className={classes.wrapper}>
          <Typography component="h4" variant="h5" gutterBottom>
            <Typography variant="inherit" color="primary">
              HELLO,{" "}
            </Typography>
            I&apos;m Kelvin Sánchez
          </Typography>

          <Typography component="h1" variant="h2" gutterBottom>
            Full Stack Developer
          </Typography>

          <Typography component="p" variant="subtitle1" color="textSecondary">
            Passionate about coding and specialize in MERN and JAM stacks.
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item>
            <Button
              href="#portfolio"
              variant="contained"
              color="primary"
              size="large"
            >
              Check My Work
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="#contact"
              variant="outlined"
              color="primary"
              size="large"
            >
              Contact me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
