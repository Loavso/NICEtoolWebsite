import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { Link } from 'gatsby';
import { Button, CardMedia, Grid, makeStyles } from '@material-ui/core';
import HeaderLayout from './HeaderLayout';

const logo = 'https://images.unsplash.com/photo-1595380752980-210b19e81442?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80';

const backgroundImage =
  'https://images.unsplash.com/photo-1543946602-a0fce8117697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    },
    container: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      display: 'flex',
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    card: {
        maxWidth: 200,
        objectFit: 'cover'
    },
    media: {
      height: 0,
      paddingTop: '100%', // 16:9
    },
}));

export default function Header() {
  const classes = useStyles();

  return (
      <HeaderLayout backgroundClassName={classes.root}>
        <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
        <Container className={classes.container}>
            <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}>
                <Grid item>
                    <img src={logo} className={classes.card}/>
                </Grid>
                <Grid item>
                    <Typography variant="h2" color="inherit">NICEtool</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" color="inherit">One Line Clever Slogan</Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item>
                        <Button color="inherit" to="/documentation" component={Link}>
                            Documentation
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography> | </Typography>
                    </Grid>
                    <Grid item>
                        <Button color="inherit" to="https://gitlab.com/sd-scanner" component={Link}>
                            GitLab
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
      </HeaderLayout>
  );
}