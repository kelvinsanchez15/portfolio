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
  responsiveButtonSize: {
    [theme.breakpoints.down("xs")]: {
      padding: "6px 16px",
      fontSize: theme.typography.button.fontSize,
    },
  },
  responsiveOutlinedButtonSize: {
    [theme.breakpoints.down("xs")]: {
      padding: "5px 15px",
      fontSize: theme.typography.button.fontSize,
    },
  },
}));

export default function Hero({ heroData }) {
  const classes = useStyles();
  const {
    greetings,
    introduction,
    role,
    paragraph,
    button1,
    button2,
  } = heroData;

  return (
    <section id="home" className={classes.root}>
      <Container>
        <div className={classes.wrapper}>
          <Typography component="h4" variant="h5" gutterBottom>
            <Typography variant="inherit" color="primary">
              {greetings}
            </Typography>
            {introduction}
          </Typography>

          <Typography component="h1" variant="h2" gutterBottom>
            {role}
          </Typography>

          <Typography component="p" variant="subtitle1" color="textSecondary">
            {paragraph}
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item>
            <Button
              href="#portfolio"
              variant="contained"
              color="primary"
              size="large"
              className={classes.responsiveButtonSize}
            >
              {button1}
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="#contact"
              variant="outlined"
              color="primary"
              size="large"
              className={classes.responsiveOutlinedButtonSize}
            >
              {button2}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
