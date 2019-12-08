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
                            <Header className={classes.header} as="h1">
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
                            {/* <Divider />
                            <Header color="grey" as="h3">F-Code presentation challenge's prizes:</Header>
                            <br />
                            <Grid textAlign="center" verticalAlign="middle">
                                <Grid.Row>
                                    <Grid.Column>
                                        <a href="https://www.facebook.com/groups/318311851911657/">
                                            <Button primary content="Join Goup Facebook" />
                                        </a>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    </div>
}

export default FormHeader;