import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from '@material-ui/core/';

import getDataUrlWithShimmerEffect from '../utils/getDataUrlWithShimmerEffect';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  cardActionArea: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      flex: '1 1 100%',
    },
  },
  mediaWrapper: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      flex: '1 1 260px',
    },
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardContent: {
    flex: '0 1 80%',
  },
}));

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
  const classes = useStyles();
  return (
    <Card className={classes.root} component="article">
      <CardActionArea
        disableRipple
        className={classes.cardActionArea}
        component="a"
        href={link}
        rel="noopener"
        target="_blank"
      >
        <div className={classes.mediaWrapper}>
          <Image
            alt={title}
            blurDataURL={getDataUrlWithShimmerEffect(500, 300)}
            className={classes.media}
            height={300}
            layout="responsive"
            placeholder="blur"
            src={mediaSrc}
            width={500}
          />
        </div>

        <CardContent className={classes.cardContent}>
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
