import {useState, useEffect} from 'react';

const useAPI = (submittedStudentID) => {
    const [hasError, setError] = useState('');
    const [data, setData] = useState([]);
    async function fetchData() {
        const res = await fetch(`https://checking-app-k15.herokuapp.com/members/${submittedStudentID}`);
        res
            .json()
            .then(res => setData(res))
            .catch(err => setError(err));

    }

    useEffect(() => {
        fetchData();
    }, []);
    return {
        hasError,
        data
    };
}

export default useAPI;

