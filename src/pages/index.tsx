import React, {FC} from 'react'
import Header from '../modules/components/Header';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Footer from '../modules/components/Footer';
import theme from '../modules/theme';
import NavBar from '../modules/components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%'
  },
}));

const index: FC = () => {
    const classes = useStyles();
    
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <NavBar />
          <Header />
          <Footer />
        </div>
      </ThemeProvider>
)}


export default index