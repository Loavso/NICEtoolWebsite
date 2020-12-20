import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { Link } from 'gatsby';
import { CardContent, CardMedia } from '@material-ui/core';
import { FullscreenExitTwoTone } from '@material-ui/icons';

export default function Header() {
  return (
    <Container style={styles.container}>
        <Card style={styles.card}>
            <CardMedia style={styles.media} image={require("../assets/TestIcon.jpg")} />
            <CardContent>
                <Typography>One Line Slogan that Fits</Typography>
            </CardContent>
            <CardContent>
                <Typography><Link to="/documentation">Documentation</Link> | <a href="https://gitlab.com/sd-scanner">GitLab</a></Typography>
            </CardContent>
        </Card>
    </Container>
  );
}


const styles = {
    container: {
        height: "45vh",
        backgroundImage: `url(${require('../assets/TestBackground.jpg')})`,
        maxWidth: "100%",
        display: "inline-flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    card: {
        maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '100%', // 16:9
    }
};