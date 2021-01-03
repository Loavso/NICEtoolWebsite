import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import QuickStart from './QuickStart';
import Divider from '@material-ui/core/Divider';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      {new Date().getFullYear()}
      <Link color="inherit" href="https://gitlab.com/sd-scanner">
        NICEtool
      </Link>{' '}
    </React.Fragment>
  );
}

function License() {
    return (
        <React.Fragment>
            <Typography>Licensed under BLARRRFANGER spelled "S-M-I-T-H"</Typography>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: '100%',
    backgroundColor: theme.palette.primary.dark
  }
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid 
          container 
          direction="column"
          alignItems="center"
          spacing={5}>
            <QuickStart />
            <Divider variant="middle" className={classes.divider} />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Copyright />
              </Grid>
              <Grid item>
                <License />
              </Grid>
            </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}