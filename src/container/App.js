//import module
import React from 'react';
//import components
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer';
import '../utils/style/App.css'
import Wakeup from '../Wakeup/Wakeup'
const interval = 1000 * 60;
const uri = "http://localhost:3000/";
const App = () => {
    return (
        <div className="App">
            <Form />
            <div className="Footer">
                <Footer />
            </div>
            <Wakeup uri={uri} interval={interval} />
        </div>
    )
}

export default App;