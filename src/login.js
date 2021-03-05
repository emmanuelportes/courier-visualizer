import React, {useState} from 'react'
import Form from './components/login/form'
import './App.css'

function Login(){
    const [username, setusername] = useState("");
    
    function submitHandler(ev){
        ev.preventDefault();
    }

    return (
        <div>
            <Form onSubmit={submitHandler} />
        </div>
    )
}

export default Login