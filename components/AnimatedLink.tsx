import { styled } from '@mui/material/styles';

import Link from './Link';

const AnimatedLink = styled(Link)(() => ({
  padding: '12px 15px',
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
}));

export default AnimatedLink;
