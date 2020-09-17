import { Container, TextField, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
  },
  divider: {
    height: "4px",
    width: "60px",
    backgroundColor: theme.palette.primary.main,
    margin: "auto",
    marginBottom: theme.spacing(4),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <section id="contact" className={classes.root}>
      <Container>
        <Typography component="h2" variant="h3" align="center" gutterBottom>
          Contact
        </Typography>
        <Divider className={classes.divider} />
        <div>
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="None"
            id="margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
          />
          <TextField
            label="Dense"
            id="margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
          <TextField
            label="Normal"
            id="margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="filled-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            label="None"
            id="filled-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="filled"
          />
          <TextField
            label="Dense"
            id="filled-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="filled"
          />
          <TextField
            label="Normal"
            id="filled-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="outlined-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            label="None"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="outlined"
          />
          <TextField
            label="Dense"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Normal"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="outlined"
          />
        </div>
      </Container>
    </section>
  );
}
