import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import data from '../../../data/data'

const Messages = ({submittedStudentID}) => {
    const submittedStudent = data.persons.find(person => {
        return person.studentID === submittedStudentID.toLocaleUpperCase();
    });
    if(submittedStudent === undefined) return <Message warning content="Don't find information in DataBase" />
    else {
        if(submittedStudent.status === 1){
            return <Message info>
                <p>Name: {submittedStudent.name}</p>
                <p>Group: {submittedStudent.group}</p>
                <h2>Congratulations!! Welcome to F-code!!!</h2>
                <a href="https://www.facebook.com/groups/318311851911657/"><Button primary content="Join Goup Facebook" /></a>
            </Message>
        } else {
            return <Message error>
                <p>Name: {submittedStudent.name}</p>
                <p>Group: {submittedStudent.group}</p>
                <h2>Goodbye!!! Good luck to you!!!</h2>
            </Message>
        }
    }
    
}

export default Messages;