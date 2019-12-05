import React from 'react';
import { Form, Container, Segment, Grid, Button } from 'semantic-ui-react';
import Messages from '../Messages/Messages';
import useForm from './useForm'

const MainForm = () => {
    const {studentID, handleInputChange, handleSubmit} = useForm();
    return (
        <div style={{'marginTop': '20px'}}>
            <Container>
                <Segment inverted>
                    <Form onSubmit={handleSubmit}>
                        <Grid stackable textAlign='center' verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={2}>
                                    <Button content="Search" color="blue" size="medium" />
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    <Form.Input
                                        fluid
                                        value={studentID}
                                        placeholder="Student ID"
                                        onChange={handleInputChange}
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Form.Button content="Check" color="green" inverted fluid/>                                    
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form>
                </Segment>
            </Container>
            { studentID !== '' ? <Container style={{'marginTop': '10px'}}>
                    <Messages submittedStudentID={studentID}/>
            </Container> : null}
        </div>
    )
}

export default MainForm;