import React  from 'react';
import {Icon} from 'semantic-ui-react';
const footerContent = [
    'Fcode - Code the Dream',
    'Made by and BinhTT',
    'Mentored by HienHT'
]


const Footer = () => {
    return (<div style={{'textAlign': 'center', 'marginTop': '8em'}}>
        <Icon name="heart"/><b>{footerContent[0]}</b><Icon name="heart"/>
        <p>{footerContent[1]}<br />{footerContent[2]}</p>
    </div>);
}

export default Footer;