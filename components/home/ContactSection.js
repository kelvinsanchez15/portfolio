import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
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
  Avatar,
} from '@material-ui/core';
import Link from '../Link';

import socialIcons from './constants/socialIcons';

import EmailSuccessMessage from '../EmailSuccessMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.grey[900],
  },
  divider: {
    height: '4px',
    width: '60px',
    backgroundColor: theme.palette.primary.main,
    margin: 'auto',
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
    '&:hover': {
      fill: theme.palette.primary.light,
    },
    '&:focus': {
      fill: theme.palette.primary.light,
    },
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  formHeader: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(1),
  },
}));

export default function Contact({ contactData }) {
  const classes = useStyles();

  const {
    title,
    p1,
    p2,
    p3,
    p4,
    resumeLink,
    subtitle,
    formTitle,
    firstNameLabel,
    lastNameLabel,
    emailLabel,
    messageLabel,
    placeholder,
    submitButton,
    requiredErrorMessage,
    invalidEmailErrorMessage,
  } = contactData;

  const [displayMessage, setDisplayMessage] = useState(false);
  const [senderFirstName, setSenderFirstName] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(requiredErrorMessage),
    lastName: Yup.string().required(requiredErrorMessage),
    email: Yup.string()
      .email(invalidEmailErrorMessage)
      .required(requiredErrorMessage),
  });

  const onSubmit = async (values, onSubmitProps) => {
    await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
          {title}
        </Typography>
        <Divider className={classes.divider} />

        <Box className={classes.avatarWrapper}>
          <Avatar
            alt="Kelvin Sánchez"
            src="/profile-picture.jpg"
            className={classes.avatar}
          />
        </Box>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {p1}
              <Link href="/#portfolio" className={classes.linkColor}>
                {p2}
              </Link>
              {p3}
              <Link
                className={classes.linkColor}
                href={resumeLink}
                rel="noopener"
                target="_blank"
              >
                {p4}
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
              {subtitle}
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

        <Typography
          className={classes.formHeader}
          component="h3"
          variant="h4"
          align="center"
        >
          {formTitle}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label={firstNameLabel}
                autoComplete="given-name"
                variant="outlined"
                color="primary"
                {...getFieldProps('firstName')}
                error={errors.firstName && Boolean(touched.firstName)}
                helperText={
                  touched.firstName && errors.firstName ? errors.firstName : ' '
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label={lastNameLabel}
                autoComplete="family-name"
                variant="outlined"
                color="primary"
                {...getFieldProps('lastName')}
                error={errors.lastName && Boolean(touched.lastName)}
                helperText={
                  touched.lastName && errors.lastName ? errors.lastName : ' '
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label={emailLabel}
                autoComplete="email"
                variant="outlined"
                color="primary"
                {...getFieldProps('email')}
                error={errors.email && Boolean(touched.email)}
                helperText={touched.email && errors.email ? errors.email : ' '}
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
                label={messageLabel}
                autoComplete="message"
                variant="outlined"
                color="primary"
                onChange={handleChange}
                value={values.message}
                placeholder={placeholder}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                className={classes.submitButton}
                fullWidth
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
              >
                {submitButton}
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
