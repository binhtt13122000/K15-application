import {useState} from 'react'

const useForm = (callback) => {
    const [studentID, setStudentID] = useState('');
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
    }
    const handleInputChange = (event) => {
        event.persist();
        setStudentID(event.target.value);
    }
    return {
        handleSubmit,
        handleInputChange,
        studentID
    };
  }

export default useForm;