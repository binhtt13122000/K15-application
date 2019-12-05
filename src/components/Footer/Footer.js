import React  from 'react';
import {Icon, Container} from 'semantic-ui-react';
import {createUseStyles} from 'react-jss'

const useStyle =  createUseStyles({
    footer: {
        textAlign: 'center',
        color: '#874e4c',
        backgroundColor: '#eabcac',
        height: '5.8em'
    }
})

const Footer = () => {
    const classes = useStyle();
    return (<div className={classes.footer}>
        <Container text>
            <br></br>
            <Icon name="heart" color="red"/>F-Code: Code the dream <Icon name="heart" color="red"/>
            <br></br>
            Made by HienHT, BinhTT
        </Container>
    </div>);
}

export default Footer;