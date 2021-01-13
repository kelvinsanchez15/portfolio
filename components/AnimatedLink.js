import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "./Link";

const styles = {
  root: {
    padding: "10px",
    textDecoration: "none",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: 0,
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#f50057",
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover::before": {
      visibility: "visible",
      width: "100%",
    },
  },
};

function AnimatedLink(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Link className={clsx(classes.root, className)} {...other}>
      {children || "class names"}
    </Link>
  );
}

export default withStyles(styles)(AnimatedLink);
