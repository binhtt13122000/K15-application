//import module
import React from 'react';
//import components
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer';
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Form />
            <div className="Footer">
                <Footer />
            </div>
        </div>
    )
}

export default App;