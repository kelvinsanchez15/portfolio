import { styled } from '@mui/material/styles';
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
} from '@mui/material/';
import { Code, Description } from '@mui/icons-material';

import skillIcons from './constants/skillIcons';

const CustomDivider = styled(Divider)(({ theme }) => ({
  height: '4px',
  width: '60px',
  backgroundColor: theme.palette.primary.main,
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
  return (
    <Box
      component="section"
      id="about"
      sx={{ pb: 8, pt: 10, bgcolor: (theme) => theme.palette.grey[900] }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12}>
            <Typography gutterBottom component="h2" variant="h3">
              {t.aboutTitle}
            </Typography>
            <CustomDivider />
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
            <CustomDivider />
          </Grid>

          <Grid item md={8} xs={12}>
            <Typography gutterBottom component="h3" variant="h4">
              {t.resumeParagraph}
            </Typography>

            <Button
              color="primary"
              endIcon={<Description />}
              href={t.resumeLink}
              rel="noopener"
              size="large"
              sx={{ m: 2 }}
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
            <CustomDivider />
          </Grid>

          <Grid item md={8} xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                fontSize: '4rem',
                justifyContent: {
                  xs: 'space-around',
                  md: 'initial',
                },
              }}
            >
              {skillIcons.map((skillIcon) => (
                <Box
                  key={skillIcon.label}
                  sx={{
                    m: {
                      xs: '0 0.4rem',
                      md: '0 1.3rem 0 0',
                    },
                    '&:hover': {
                      color: 'primary.light',
                    },
                  }}
                >
                  {skillIcon.icon}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
