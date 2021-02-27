import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Divider,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Hidden,
} from '@material-ui/core/';

import blogPosts from './constants/blogs';
import RecentPostCard from '../RecentPostCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  divider: {
    height: '4px',
    width: '60px',
    backgroundColor: theme.palette.primary.main,
    margin: 'auto',
    marginBottom: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 300,
    objectFit: 'cover',
  },
}));

interface BlogData {
  featuredArticle: string;
  mostRecent: string;
  button: string;
}

export default function Blog({ blogData: t }: { blogData: BlogData }) {
  const classes = useStyles();

  return (
    <section id="blog" className={classes.root}>
      <Container>
        <Typography component="h2" variant="h3" align="center" gutterBottom>
          BLOG
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={4}>
          <Grid item md={5} xs={12}>
            <Typography variant="h4" component="h2" align="left" gutterBottom>
              {t.featuredArticle}
            </Typography>
            <Card className={classes.card} component="article">
              <CardActionArea
                href={blogPosts.featuredPost.link}
                rel="noopener"
                target="_blank"
                component="a"
                disableRipple
              >
                <Image
                  className={classes.media}
                  src={blogPosts.featuredPost.mediaSrc}
                  alt={blogPosts.featuredPost.title}
                  layout="responsive"
                  width={500}
                  height={300}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`#${blogPosts.featuredPost.category}`}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="h2">
                    {blogPosts.featuredPost.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blogPosts.featuredPost.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Hidden smDown implementation="css">
              <Button
                size="large"
                fullWidth
                variant="contained"
                href="https://www.freecodecamp.org/espanol/news/author/kelvin/"
                rel="noopener"
                target="_blank"
              >
                {t.button}
              </Button>
            </Hidden>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography variant="h4" component="h2" align="right" gutterBottom>
              {t.mostRecent}
            </Typography>
            <div>
              {blogPosts.recentPosts.map((post) => (
                <RecentPostCard
                  key={post.title}
                  title={post.title}
                  category={post.category}
                  link={post.link}
                  mediaSrc={post.mediaSrc}
                />
              ))}
            </div>

            <Hidden mdUp implementation="css">
              <Button
                size="large"
                fullWidth
                variant="contained"
                href="https://www.freecodecamp.org/espanol/news/author/kelvin/"
                rel="noopener"
                target="_blank"
              >
                {t.button}
              </Button>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
