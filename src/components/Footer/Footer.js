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
            <br />
            <Icon name="heart" color="red"/>F-Code: Code the dream <Icon name="heart" color="red"/><br />
            <Icon name="smile" color="violet"/>Welcome K15 members <Icon name="smile" color="violet"/>
        </Container>
    </div>);
}

export default Footer;