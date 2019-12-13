import axios from 'axios'
import React from 'react'
const WakeUp = ({uri, interval}) => {
    const wakeUp = (uri, interval) =>{
        setTimeout(() => {
            try {
                
                axios.get(uri);
            } catch (err) {
                console.log(err);
                console.log(`Error fetching at uri: ${uri}`);
            } finally{
                console.log(uri)
                wakeUp(uri, interval);
            }
        }, interval);
    }
    return <div>{wakeUp(uri, interval)}</div>;
}
export default WakeUp;