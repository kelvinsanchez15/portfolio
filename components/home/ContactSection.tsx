import Image from 'next/image';
import { useState } from 'react';
import { useFormik, FormikHelpers } from 'formik';
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
  socialIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
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

interface ContactData {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  resumeLink: string;
  subtitle: string;
  formTitle: string;
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  messageLabel: string;
  placeholder: string;
  submitButton: string;
  requiredErrorMessage: string;
  invalidEmailErrorMessage: string;
}

interface ContactFormFields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact({
  contactData: t,
}: {
  contactData: ContactData;
}) {
  const classes = useStyles();

  const [displayMessage, setDisplayMessage] = useState(false);
  const [senderFirstName, setSenderFirstName] = useState('');

  const initialValues: ContactFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t.requiredErrorMessage),
    lastName: Yup.string().required(t.requiredErrorMessage),
    email: Yup.string()
      .email(t.invalidEmailErrorMessage)
      .required(t.requiredErrorMessage),
  });

  const onSubmit = async (
    values: ContactFormFields,
    onSubmitProps: FormikHelpers<ContactFormFields>
  ) => {
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
          {t.title}
        </Typography>
        <Divider className={classes.divider} />

        <div className={classes.avatarWrapper}>
          <Avatar className={classes.avatar}>
            <Image
              alt="Kelvin Sánchez"
              src="/profile-picture.jpg"
              width={56}
              height={56}
            />
          </Avatar>
        </div>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {t.p1}
              <Link href="/#portfolio" className={classes.linkColor}>
                {t.p2}
              </Link>
              {t.p3}
              <Link
                className={classes.linkColor}
                href={t.resumeLink}
                rel="noopener"
                target="_blank"
              >
                {t.p4}
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
              {t.subtitle}
            </Typography>

            <div className={classes.socialIconWrapper}>
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
            </div>
          </CardContent>
        </Card>

        <Typography
          className={classes.formHeader}
          component="h3"
          variant="h4"
          align="center"
        >
          {t.formTitle}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                label={t.firstNameLabel}
                autoComplete="given-name"
                variant="outlined"
                color="primary"
                {...getFieldProps('firstName')}
                error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                helperText={
                  touched.firstName && errors.firstName ? errors.firstName : ' '
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label={t.lastNameLabel}
                autoComplete="family-name"
                variant="outlined"
                color="primary"
                {...getFieldProps('lastName')}
                error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                helperText={
                  touched.lastName && errors.lastName ? errors.lastName : ' '
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label={t.emailLabel}
                autoComplete="email"
                variant="outlined"
                color="primary"
                {...getFieldProps('email')}
                error={Boolean(errors.email) && Boolean(touched.email)}
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
                label={t.messageLabel}
                autoComplete="message"
                variant="outlined"
                color="primary"
                onChange={handleChange}
                value={values.message}
                placeholder={t.placeholder}
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
                {t.submitButton}
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
