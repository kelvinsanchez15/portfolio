import clsx from 'clsx';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Link, { LinkProps } from './Link';

const styles = createStyles({
  root: {
    padding: '10px',
    textDecoration: 'none',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: 0,
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: '#f50057',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover::before': {
      visibility: 'visible',
      width: '100%',
    },
  },
});

function AnimatedLink(props: LinkProps) {
  const { classes, children, className, ...other } = props;

  return (
    <Link className={clsx(classes?.root, className)} {...other}>
      {children || 'class names'}
    </Link>
  );
}

export default withStyles(styles)(AnimatedLink);
