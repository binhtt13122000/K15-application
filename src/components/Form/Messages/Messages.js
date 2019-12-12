import React from 'react';
import { Message,Grid, Button } from 'semantic-ui-react';
import useAPI from '../../../API/useAPI'

const Messages = ({submittedStudentID}) => {
    const {data} = useAPI();    
    
    
    const submittedStudent = data.find(person => {
        return person.id === submittedStudentID;
    });
    

    if(submittedStudent !== undefined){
        if(submittedStudent.ispassed === true){
            return <Message info>
                <p>Name: {submittedStudent.studentname}</p>
                <p>Group: {submittedStudent.groupnumber}</p>
                <h3>Congratulations!! Welcome to F-code!!!</h3>
                <br />
                <Grid textAlign="center" verticalAlign="middle">                
                    <a href="https://www.facebook.com/groups/318311851911657/">
                        <Button primary content="Join Goup Facebook" />
                    </a>
                </Grid>
            </Message>
        } else {
            return <Message error>
                <p>Name: {submittedStudent.studentname}</p>
                <p>Group: {submittedStudent.groupnumber}</p>
                <h3>Goodbye!!! Good luck to you!!!</h3>
            </Message>
        }
    }
    else {
        return <Message warning content="Don't find information in DataBase" />
    }
    
}
export default Messages;