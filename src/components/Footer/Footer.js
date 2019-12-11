import React  from 'react';
import {Icon, Container} from 'semantic-ui-react';
import '../../utils/style/Footer.css'
const Footer = () => {
    return (<div className="footer">
        <Container text>
            <br />
            <Icon name="heart" color="red"/>F-Code: Code the dream <Icon name="heart" color="red"/><br />
            <Icon name="smile" color="violet"/>Welcome K15 members <Icon name="smile" color="violet"/>
        </Container>
    </div>);
}

export default Footer;