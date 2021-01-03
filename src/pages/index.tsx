import React, {FC} from 'react'
import Header from '../modules/components/Header';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Footer from '../modules/components/Footer';
import theme from '../modules/theme';


const index: FC = () => {
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Footer />
      </ThemeProvider>
)}


export default index