import React, {FC} from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../modules/theme';
import NavBar from '../modules/components/NavBar';
import Footer from '../modules/components/Footer';

const documentation: FC = () => {
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
      </ThemeProvider>
)}


export default documentation