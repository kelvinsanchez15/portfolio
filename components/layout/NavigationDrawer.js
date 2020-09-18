import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Divider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listItemIcon: {
    minWidth: "56px",
  },
}));

export default function NavigationDrawer(props) {
  const { menuItems, anchor, open, onClose } = props;
  const classes = useStyles();

  return (
    <Drawer variant="temporary" anchor={anchor} open={open} onClose={onClose}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <CloseIcon fontSize="large" color="secondary" />
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem
              button
              onClick={onClose}
              key={item.name}
              href={item.link}
              component="a"
            >
              <ListItemIcon className={classes.listItemIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
