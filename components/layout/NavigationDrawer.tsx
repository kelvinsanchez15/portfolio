import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Divider,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listItemIcon: {
    minWidth: '56px',
  },
}));

interface MenuItems {
  link: string;
  name: string;
  icon: JSX.Element;
}

interface NavigationDrawerProps {
  menuItems: MenuItems[];
  open: boolean;
  onClose: () => void;
}

export default function NavigationDrawer(props: NavigationDrawerProps) {
  const { menuItems, open, onClose } = props;
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} variant="temporary" onClose={onClose}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <CloseIcon color="secondary" fontSize="large" />
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.name}
            button
            onClick={onClose}
            {...{ component: Link, href: item.link, noLinkStyle: true }}
          >
            <ListItemIcon className={classes.listItemIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
