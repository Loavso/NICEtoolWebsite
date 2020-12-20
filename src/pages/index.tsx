import React, {CSSProperties, FC} from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/Header';
import { CssBaseline } from '@material-ui/core';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});


const index: FC = () => {
    return(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
)}


export default index