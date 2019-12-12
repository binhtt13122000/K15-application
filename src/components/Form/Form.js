import React, {useState} from 'react';
import FormHeader from './FormHeader/FormHeader';
// import MainForm from './MainForm/MainForm';
import Messages from './Messages/Messages';
import {Container, Message, Step} from 'semantic-ui-react'
const Form = () => {
    const [studentID, setStudentID] = useState('');
    const [fptDomain, setFptDomail] = useState('');
    const callback = (value) => {
        const studentID = value.slice(value.indexOf('@') - 8, value.indexOf('@')).toLocaleUpperCase();
        const domain = value.slice(value.indexOf('@')).toLocaleLowerCase();
        setStudentID(studentID);
        setFptDomail(domain);
    }
    return(
        <div >
            <FormHeader parentCallback={callback}/>    
            {/* <MainForm /> */}
            <Container style={{'marginTop': '20px'}}>
                {(studentID === '') ? 
                        <Step.Group ordered stackable="tablet" fluid>
                            <Step completed>
                                <Step.Content>
                                    <Step.Title>CV Challenge and Interview Challenge</Step.Title>
                                    <Step.Description>3/11 - 9/11</Step.Description>
                                </Step.Content>
                            </Step>
                            <Step completed>
                                <Step.Content>
                                    <Step.Title>Group Presentation Challenge</Step.Title>
                                    <Step.Description>3/11 - 15/12</Step.Description>
                                </Step.Content>
                            </Step>
                            <Step active>
                                <Step.Content>
                                    <Step.Title>Check result and join Facebook group</Step.Title>
                                </Step.Content>
                            </Step>
                        </Step.Group> : ((fptDomain === '@fpt.edu.vn') ? <Messages submittedStudentID={studentID}/>: 
                            <Message error content="Only check by FPT mail!!!" />) }
            </Container>
        </div>
    )    
}

export default Form;