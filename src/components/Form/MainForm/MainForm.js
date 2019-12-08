import React from 'react';
import { Form, Container, Segment, Grid, Button } from 'semantic-ui-react';
import Messages from '../Messages/Messages';
import useForm from './useMainForm'


const MainForm = () => {
    
    const {studentID, handleInputChange, handleSubmit} = useForm();
    return (
        <div style={{'marginTop': '10px'}}>
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
            { studentID !== '' || studentID.length < 8 ? <Container style={{'marginTop': '5px'}}>
                    <Messages submittedStudentID={studentID}/>
            </Container> : null}
        </div>
    )
}

export default MainForm;