import React from 'react';
import { Message,Grid, Button } from 'semantic-ui-react';
import data from '../../../data/data'

const Messages = ({submittedStudentID}) => {
    const submittedStudent = data.persons.find(person => {
        return person.studentID === submittedStudentID.toLocaleUpperCase();
    });
    if(submittedStudent === undefined){
        if(submittedStudentID.length === 8) return <Message warning content="Don't find information in DataBase" />
        else return null;
    }
    else {
        if(submittedStudent.status === 1){
            return <Message info>
                <p>Name: {submittedStudent.name}</p>
                <p>Group: {submittedStudent.group}</p>
                <h3>Congratulations!! Welcome to F-code!!!</h3>
                <br />
                <Grid textAlign="center" verticalAlign="middle">                
                    <a href="https://www.facebook.com/groups/318311851911657/">
                        <Button disabled={false} primary content="Join Goup Facebook" />
                    </a>
                </Grid>
            </Message>
        } else {
            return <Message error>
                <p>Name: {submittedStudent.name}</p>
                <p>Group: {submittedStudent.group}</p>
                <h3>Goodbye!!! Good luck to you!!!</h3>
            </Message>
        }
    }
    
}


export default Messages;