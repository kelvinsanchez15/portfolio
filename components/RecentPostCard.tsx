import Image from 'next/legacy/image';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material/';

import getDataUrlWithShimmerEffect from '../utils/getDataUrlWithShimmerEffect';

interface RecentPostCardProps {
  title: string;
  category: string;
  link: string;
  mediaSrc: string;
}

export default function RecentPostCard({
  title,
  category,
  link,
  mediaSrc,
}: RecentPostCardProps) {
  return (
    <Card component="article" elevation={8} sx={{ mb: 2 }}>
      <CardActionArea
        disableRipple
        component="a"
        href={link}
        rel="noopener"
        sx={{
          display: { md: 'flex' },
          flexDirection: { md: 'row' },
          flex: { md: '1 1 100%' },
        }}
        target="_blank"
      >
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'block',
            },
            flex: { md: '1 1 260px' },
          }}
        >
          <Image
            alt={title}
            blurDataURL={getDataUrlWithShimmerEffect(500, 300)}
            height={300}
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            src={mediaSrc}
            width={500}
          />
        </Box>

        <CardContent sx={{ flex: '0 1 80%' }}>
          <Typography color="textSecondary" component="p" variant="body2">
            {`#${category}`}
          </Typography>
          <Typography component="h2" variant="body1">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
