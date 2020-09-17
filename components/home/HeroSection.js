import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Typography, Box, Grid } from "@material-ui/core/";
import { ChevronLeft, ChevronRight, ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: theme.palette.grey[900],
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  icon: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <section id="home" className={classes.root}>
      <Container className={classes.wrapper}>
        <Box>
          <Typography component="h2" variant="h3">
            Hi! I am
          </Typography>

          <Grid container direction="row" alignItems="center">
            <ChevronLeft
              className={classes.icon}
              fontSize="large"
              color="primary"
            />
            <Typography component="h1" variant="h2">
              Kelvin Sánchez
            </Typography>
            <ChevronRight
              className={classes.icon}
              fontSize="large"
              color="primary"
            />
          </Grid>

          <Typography component="h2" variant="h3">
            A full-stack developer.
          </Typography>
        </Box>

        <Box>
          <Button
            href="#about"
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForward />}
          >
            Learn more about me
          </Button>
        </Box>
      </Container>
    </section>
  );
}
