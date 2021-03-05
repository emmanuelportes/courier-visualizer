import React from 'react'

function Form(){
    return(
        <div>
            <section className="login-form">
                <div className="title-container">
                     <h2>Login</h2>
                </div>
                <br/>
                <form method="POST" action="">
                    <label htmlFor="fusername">Username: </label>
                    <input id="fusername" name="fusername" placeholder ="Introduce Username" pattern="[A-Za-z0-9].{3,10}" type="text" title="must containt 10 letters and no special characters" required/>

                    <label htmlFor="fpassword">Password: </label>
                    <input id="fpassword" name="fpassword" placeholder="Introduce Password"  type="password" pattern="[A-Za-z0-9].{3,10}" title="must containt 10 letters and no special characters" required/>

                    <input type="submit" name="submit" id="submit"/>
                </form>
            </section>
        </div>
    )

}


export default Form