import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

const ShortCenteredDivider = styled(Divider)(({ theme }) => ({
  height: '4px',
  width: '60px',
  backgroundColor: theme.palette.primary.main,
  margin: 'auto',
}));

export default ShortCenteredDivider;
