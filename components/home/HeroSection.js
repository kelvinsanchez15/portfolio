import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Typography, Grid } from "@material-ui/core/";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  homeHero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[900],
  },
  heroButton: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <section id="home" className={classes.homeHero}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography component="h1" variant="h2" gutterBottom>
              Hi! I&apos;m Kelvin, a full-stack developer.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h5" component="p">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.
            </Typography>
          </Grid>
        </Grid>

        <Button
          className={classes.heroButton}
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          More About me
        </Button>
      </Container>
    </section>
  );
}
