import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from '@material-ui/core/';

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
        className={classes.cardActionArea}
        href={link}
        rel="noopener"
        target="_blank"
        component="a"
        disableRipple
      >
        <div className={classes.mediaWrapper}>
          <Image
            className={classes.media}
            src={mediaSrc}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
          />
        </div>

        <CardContent className={classes.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
            {`#${category}`}
          </Typography>
          <Typography variant="body1" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
