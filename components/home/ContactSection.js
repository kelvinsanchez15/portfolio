import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Divider,
  Button,
  Card,
  CardContent,
  Box,
  IconButton,
  Link,
} from "@material-ui/core";

import socialIcons from "./constants/socialIcons";

import EmailSuccessMessage from "../EmailSuccessMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  divider: {
    height: "4px",
    width: "60px",
    backgroundColor: theme.palette.primary.main,
    margin: "auto",
    marginBottom: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(4),
  },
  linkColor: {
    color: theme.palette.primary.light,
  },
  socialIcon: {
    fill: theme.palette.common.white,
    "&:hover": {
      fill: theme.palette.primary.light,
    },
    "&:focus": {
      fill: theme.palette.primary.light,
    },
  },
}));

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
});

export default function Contact() {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [senderFirstName, setSenderFirstName] = useState("");

  const classes = useStyles();

  const onSubmit = async (values, onSubmitProps) => {
    await fetch("/api/mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message,
      }),
    });

    setSenderFirstName(values.firstName);
    onSubmitProps.resetForm();
    setDisplayMessage(true);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const {
    errors,
    touched,
    values,
    handleChange,
    handleSubmit,
    getFieldProps,
  } = formik;

  return (
    <section id="contact" className={classes.root}>
      <Container maxWidth="sm">
        <Typography component="h2" variant="h3" align="center" gutterBottom>
          Contact
        </Typography>
        <Divider className={classes.divider} />

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {
                "If you are interested in hiring me for your project please use the form below to get in touch. Want to know how I work and what I can offer? Check out my "
              }
              <Link href="/#portfolio" className={classes.linkColor}>
                portfolio
              </Link>
              {" and "}
              <Link href="/#" className={classes.linkColor}>
                resume
              </Link>
              .
            </Typography>
          </CardContent>

          <Divider />

          <CardContent>
            <Typography
              variant="body1"
              color="textPrimary"
              align="center"
              component="p"
              gutterBottom
            >
              You can also find me on the following channels
            </Typography>

            <Box display="flex" justifyContent="center">
              {socialIcons.map((socialIcon) => (
                <IconButton
                  key={socialIcon.label}
                  aria-label={socialIcon.label}
                  className={classes.socialIcon}
                  href={socialIcon.href}
                  rel="noopener"
                  target="_blank"
                  component="a"
                >
                  {socialIcon.icon}
                </IconButton>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Typography component="h3" variant="h4" align="center" gutterBottom>
          Get in touch
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                autoComplete="given-name"
                variant="outlined"
                color="primary"
                {...getFieldProps("firstName")}
                error={errors.firstName && Boolean(touched.firstName)}
                helperText={touched.firstName ? errors.firstName : ""}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                autoComplete="family-name"
                variant="outlined"
                color="primary"
                {...getFieldProps("lastName")}
                error={errors.lastName && Boolean(touched.lastName)}
                helperText={touched.lastName ? errors.lastName : ""}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                autoComplete="email"
                variant="outlined"
                color="primary"
                {...getFieldProps("email")}
                error={errors.email && Boolean(touched.email)}
                helperText={touched.email ? errors.email : ""}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                multiline
                rows={5}
                fullWidth
                id="message"
                name="message"
                type="message"
                label="Message"
                autoComplete="message"
                variant="outlined"
                color="primary"
                onChange={handleChange}
                value={values.message}
                placeholder="Feel free to include any details."
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>

        <EmailSuccessMessage
          senderFirstName={senderFirstName}
          setDisplayMessage={setDisplayMessage}
          displayMessage={displayMessage}
        />
      </Container>
    </section>
  );
}
