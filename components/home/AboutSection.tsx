import { makeStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core/';
import { Code, Description } from '@material-ui/icons';

import skillIcons from './constants/skillIcons';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  divider: {
    height: '4px',
    width: '60px',
    backgroundColor: theme.palette.primary.main,
  },
  resumeBtn: {
    margin: '1rem',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '4rem',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around',
    },
  },
  skillIcon: {
    marginRight: '1.3rem',
    '&:hover': {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 0.4rem',
    },
  },
}));

interface AboutData {
  aboutTitle: string;
  aboutItems: string[];
  resumeTitle: string;
  resumeParagraph: string;
  resumeButton: string;
  resumeLink: string;
  skillsTitle: string;
}

export default function About({ aboutData: t }: { aboutData: AboutData }) {
  const classes = useStyles();

  return (
    <section className={classes.root} id="about">
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12}>
            <Typography gutterBottom component="h2" variant="h3">
              {t.aboutTitle}
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item md={8} xs={12}>
            <List disablePadding>
              {t.aboutItems.map((item) => (
                <ListItem key={item}>
                  <ListItemIcon>
                    <Code color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item md={4} xs={12}>
            <Typography gutterBottom component="h2" variant="h3">
              {t.resumeTitle}
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item md={8} xs={12}>
            <Typography gutterBottom component="h3" variant="h4">
              {t.resumeParagraph}
            </Typography>

            <Button
              className={classes.resumeBtn}
              color="primary"
              endIcon={<Description />}
              href={t.resumeLink}
              rel="noopener"
              size="large"
              target="_blank"
              variant="outlined"
            >
              {t.resumeButton}
            </Button>
          </Grid>

          <Grid item md={4} xs={12}>
            <Typography gutterBottom component="h2" variant="h3">
              {t.skillsTitle}
            </Typography>
            <Divider className={classes.divider} />
          </Grid>

          <Grid item md={8} xs={12}>
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
