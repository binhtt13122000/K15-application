import React, {useState, useEffect} from 'react';
import FormHeader from './FormHeader/FormHeader';
import Messages from './Messages/Messages';
import axios from 'axios';
import {Container, Message, Step, Loader, Dimmer} from 'semantic-ui-react'
const Form = () => {
    
    const [studentID, setStudentID] = useState('default');
    const [fptDomain, setFptDomail] = useState('');
    const [load, setLoad] = useState(true);
    const callback = (value) => {
        const studentID = value.slice(value.indexOf('@') - 8, value.indexOf('@')).toLocaleUpperCase();
        const domain = value.slice(value.indexOf('@')).toLocaleLowerCase();
        setStudentID(studentID);
        setFptDomail(domain);
    }
    //
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://checking-app-k15.herokuapp.com/members/${studentID}`,
          );
          setData(result.data);
        };
        fetchData();
      }, [studentID]);
      //
    useEffect(() => {
        window.scrollTo(0, 0);
        const time = setTimeout(() => {
            setLoad(false);
        }, 3000);
        return () => {
            setLoad(true);
            clearTimeout(time);
        }     
    }
    , [studentID]);
    return(
        <div >
            <FormHeader parentCallback={callback} />
            {/* <MainForm /> */}
            <Container style={{'marginTop': '20px'}}>
                {(studentID === 'default') ? 
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
                        </Step.Group> :  
                        <div>
                            <Dimmer.Dimmable blurring dimmed={load}>
                                {(fptDomain === '@fpt.edu.vn') ? <Messages data={data}/> : 
                                <Message error content="Only check by FPT mail!!!" />}
                                <Dimmer active={load} page>
                                    <Loader size="large">
                                        Data Processing
                                    </Loader>
                                </Dimmer>
                            </Dimmer.Dimmable>
                        </div>
                        }
            </Container>
        </div>
    )    
}

export default Form;