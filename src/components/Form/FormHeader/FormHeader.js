import React from 'react';
import { Segment, Grid, Image, Container, Header, Divider, Button } from 'semantic-ui-react';
import logo from '../../../utils/img/logo.png';
import {createUseStyles} from 'react-jss';

const useStyle = createUseStyles({
    header: {
        textAlign: 'left'
    },
    logo: {

    },
    '@media screen and (max-width: 767px)': {
        logo: {
            width: '60%'
        },
        header: {
            textAlign: 'center'
        },
    }
})
const FormHeader = () => {
    const classes = useStyle();
    return <div style={{'paddingTop': '40px'}}>
        <Container >
            <Segment color="red" >
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width="5" verticalAlign="middle">
                            <Image
                                className={classes.logo} 
                                src={logo}
                                centered 
                                circular    
                            />
                        </Grid.Column>
                        <Grid.Column width="11" verticalAlign = 'middle'>
                            <Header className={classes.header} as="h1">
                                F-CODE - CODE THE DREAM
                                <Header.Subheader>FPT University</Header.Subheader>
                            </Header>
                            <Divider />
                                <Header color="grey" as="h3">Contact Us:</Header>
                                <Segment>
                                    <a href="https://www.facebook.com/fcodefpt/">
                                        <Button 
                                            color="facebook" 
                                            icon="facebook" 
                                            size="big" 
                                        />
                                    </a>
                                    <span>facebook.com/fcodefpt/</span>
                                </Segment>
                                <Segment>
                                    <a href="https://fcodehcm.wordpress.com/">
                                        <Button 
                                            color="twitter" 
                                            icon="wordpress" 
                                            size="big"
                                        />
                                    </a>
                                    <span>fcodehcm.wordpress.com/</span>
                                </Segment>
                                <Segment>
                                    <a href="https://fcodehcm.wordpress.com/">
                                        <Button 
                                            color="google plus" 
                                            icon="google" 
                                            size="big"
                                        />
                                    </a>
                                    <span>fcode.fptuhcm@gmail.com</span>
                                </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    </div>
}

export default FormHeader;