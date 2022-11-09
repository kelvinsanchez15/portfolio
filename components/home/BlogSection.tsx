import Image from 'next/legacy/image';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from '@mui/material/';

import ShortCenteredDivider from '../ui/ShortCenteredDivider';
import RecentPostCard from '../RecentPostCard';
import getDataUrlWithShimmerEffect from '../../utils/getDataUrlWithShimmerEffect';

import blogPosts from './constants/blogs';

interface BlogData {
  featuredArticle: string;
  mostRecent: string;
  button: string;
}

export default function Blog({ blogData: t }: { blogData: BlogData }) {
  return (
    <Box
      component="section"
      id="blog"
      sx={{ pb: 8, pt: 10, bgcolor: (theme) => theme.palette.grey[900] }}
    >
      <Container>
        <Typography gutterBottom align="center" component="h2" variant="h3">
          BLOG
        </Typography>

        <ShortCenteredDivider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          <Grid item md={5} xs={12}>
            <Typography gutterBottom align="left" component="h2" variant="h4">
              {t.featuredArticle}
            </Typography>
            <Card component="article" elevation={8} sx={{ mb: 2 }}>
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
                  height={300}
                  layout="responsive"
                  objectFit="cover"
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

            <Button
              fullWidth
              href="https://www.freecodecamp.org/espanol/news/author/kelvin/"
              rel="noopener"
              size="large"
              sx={{ display: { xs: 'none', md: 'flex' } }}
              target="_blank"
              variant="contained"
            >
              {t.button}
            </Button>
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

            <Button
              fullWidth
              href="https://www.freecodecamp.org/espanol/news/author/kelvin/"
              rel="noopener"
              size="large"
              sx={{ display: { md: 'none' } }}
              target="_blank"
              variant="contained"
            >
              {t.button}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
