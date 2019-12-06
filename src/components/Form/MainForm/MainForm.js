import React from 'react';
import { Form, Container, Segment, Grid, Button } from 'semantic-ui-react';
import Messages from '../Messages/Messages';
import useForm from './useForm'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    form: {
        marginTop: 20,
        paddingBottom: '7.0em'
    },
    '@media screen and (max-width: 767px)': {
        form: {
            paddingBottom: '1em'    
        }
    }
})
const MainForm = () => {
    const classes = useStyle();
    const {studentID, handleInputChange, handleSubmit} = useForm();
    return (
        <div className={classes.form}>
            <Container>
                <Segment style={{'backgroundColor' : '#e2b091'}}>
                    <Form onSubmit={handleSubmit}>
                        <Grid stackable textAlign='center' verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={2}>
                                    <Button content="Search ID" color="google plus" size="medium" />
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    <Form.Input
                                        fluid
                                        value={studentID.toUpperCase()}
                                        placeholder="Student ID"
                                        onChange={handleInputChange}
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Form.Button content="Check" color="google plus" fluid/>                                    
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form>
                </Segment>
            </Container>
            { studentID !== '' || studentID.length < 8 ? <Container style={{'marginTop': '10px'}}>
                    <Messages submittedStudentID={studentID}/>
            </Container> : null}
        </div>
    )
}

export default MainForm;