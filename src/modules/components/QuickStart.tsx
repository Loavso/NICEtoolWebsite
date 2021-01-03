import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function QuickStart() {
  return (
    <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
    >
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
            spacing={2}
        >
            <Grid item>
                <GetAppIcon fontSize="large" />
            </Grid>
            <Grid item>
                <Typography variant="h4">QUICK START</Typography>
            </Grid>
        </Grid>
        <Grid item>
            <Button variant="contained" href="https://gitlab.com/sd-scanner" color="secondary">Download on GitLab</Button>
        </Grid>
        <Grid sm={6} item>
            <Typography variant="body1">
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
        </Grid>
    </Grid>
  );
}