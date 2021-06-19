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

import RecentPostCard from '../RecentPostCard';
import getDataUrlWithShimmerEffect from '../../utils/getDataUrlWithShimmerEffect';

import blogPosts from './constants/blogs';

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
    <section className={classes.root} id="blog">
      <Container>
        <Typography gutterBottom align="center" component="h2" variant="h3">
          BLOG
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={4}>
          <Grid item md={5} xs={12}>
            <Typography gutterBottom align="left" component="h2" variant="h4">
              {t.featuredArticle}
            </Typography>
            <Card className={classes.card} component="article">
              <CardActionArea
                disableRipple
                component="a"
                href={blogPosts.featuredPost.link}
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt={blogPosts.featuredPost.title}
                  blurDataURL={getDataUrlWithShimmerEffect(500, 300)}
                  className={classes.media}
                  height={300}
                  layout="responsive"
                  placeholder="blur"
                  src={blogPosts.featuredPost.mediaSrc}
                  width={500}
                />
                <CardContent>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    {`#${blogPosts.featuredPost.category}`}
                  </Typography>

                  <Typography gutterBottom component="h2" variant="h5">
                    {blogPosts.featuredPost.title}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    {blogPosts.featuredPost.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Hidden smDown implementation="css">
              <Button
                fullWidth
                href="https://www.freecodecamp.org/espanol/news/author/kelvin/"
                rel="noopener"
                size="large"
                target="_blank"
                variant="contained"
              >
                {t.button}
              </Button>
            </Hidden>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography gutterBottom align="right" component="h2" variant="h4">
              {t.mostRecent}
            </Typography>
            <div>
              {blogPosts.recentPosts.map((post) => (
                <RecentPostCard
                  key={post.title}
                  category={post.category}
                  link={post.link}
                  mediaSrc={post.mediaSrc}
                  title={post.title}
                />
              ))}
            </div>

            <Hidden mdUp implementation="css">
              <Button
                fullWidth
                href="https://www.freecodecamp.org/espanol/news/author/kelvin/"
                rel="noopener"
                size="large"
                target="_blank"
                variant="contained"
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
