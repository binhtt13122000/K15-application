import React from 'react';
import { Segment, Grid, Image, Container, Header, Divider, Button } from 'semantic-ui-react';
import logo from '../../../utils/img/logo.png';
import {createUseStyles} from 'react-jss';
import GoogleLogin from 'react-google-login'

const useStyle = createUseStyles({
    header: {
        textAlign: 'left'
    },
    logo: {
        width: 'auto'
    },
    '@media screen and (max-width: 767px)': {
        logo: {
            width: '60%'
        },
        header: {
            textAlign: 'center'
        },
    },
    '@media screen and (max-width: 300px)': {
        logo: {
            width: 'auto'
        },
        header: {
            textAlign: 'center'
        },
    }
})
const FormHeader = ({parentCallback}) => {
    const classes = useStyle();
    
    const responseGoogle = (response) => {
        parentCallback(response.profileObj.email);
    }
    return <div style={{'paddingTop': '20px'}}>
        <Container >
            <Segment color="red" >
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width="5" verticalAlign="middle">
                            <a href="https://fcodehcm.wordpress.com/">
                                <Image
                                    className={classes.logo} 
                                    src={logo}
                                    centered 
                                    circular    
                                />
                            </a>
                        </Grid.Column>
                        <Grid.Column width="11" verticalAlign = 'middle'>
                            <Header className={classes.header} as="h2">
                                F-CODE RECRUITMENT 2019 RESULT
                                <Header.Subheader>FPT University</Header.Subheader>
                            </Header>
                            <Divider />
                            <Header color="grey" as="h3">Contact Us:</Header>
                            <a href="https://www.facebook.com/fcodefpt/">
                                <Button 
                                color="facebook" 
                                icon="facebook" 
                                size="big" 
                                circular
                                />
                            </a>
                            <a href="https://fcodehcm.wordpress.com/">
                                <Button 
                                    color="twitter" 
                                    icon="wordpress" 
                                    size="big"
                                    circular
                                />
                            </a>
                            <a href="https://mail.google.com/">
                                <Button 
                                    color="google plus" 
                                    icon="google" 
                                    size="big"
                                    circular
                                />
                            </a>
                            <Divider />
                            <Header color="grey" as="h3">Check by FPT mail: </Header> 
                            <Grid textAlign="center" verticalAlign="middle">
                                <Grid.Column>
                                    <Grid.Row>
                                        <GoogleLogin
                                            clientId="684318469667-ik3b0isao0sq7si8gmbni41orll4nn0s.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                            buttonText="LOGIN WITH GOOGLE"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </Grid.Row>
                                    <Grid.Row>
                                        <br />
                                        <i style={{'opacity': '0.6'}}>Ony use your FPT mail to check!!!</i>
                                    </Grid.Row> 
                                </Grid.Column>   
                            </Grid>   
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    </div>
}

export default FormHeader;