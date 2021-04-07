import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, Grid } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[900],
  },
  wrapper: {
    marginBottom: theme.spacing(7),
  },
  responsiveButtonSize: {
    [theme.breakpoints.down('xs')]: {
      padding: '6px 16px',
      fontSize: theme.typography.button.fontSize,
    },
  },
  responsiveOutlinedButtonSize: {
    [theme.breakpoints.down('xs')]: {
      padding: '5px 15px',
      fontSize: theme.typography.button.fontSize,
    },
  },
}));

interface HeroData {
  greetings: string;
  introduction: string;
  role: string;
  paragraph: string;
  button1: string;
  button2: string;
}

export default function Hero({ heroData: t }: { heroData: HeroData }) {
  const classes = useStyles();

  return (
    <section className={classes.root} id="home">
      <Container>
        <div className={classes.wrapper}>
          <Typography gutterBottom component="h4" variant="h5">
            <Typography color="primary" variant="inherit">
              {t.greetings}
            </Typography>
            {t.introduction}
          </Typography>

          <Typography gutterBottom component="h1" variant="h2">
            {t.role}
          </Typography>

          <Typography color="textSecondary" component="p" variant="subtitle1">
            {t.paragraph}
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item>
            <Button
              className={classes.responsiveButtonSize}
              color="primary"
              href="#portfolio"
              size="large"
              variant="contained"
            >
              {t.button1}
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.responsiveOutlinedButtonSize}
              color="primary"
              href="#contact"
              size="large"
              variant="outlined"
            >
              {t.button2}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
