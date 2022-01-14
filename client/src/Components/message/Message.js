import React from "react";
import { Link } from "react-router-dom";
import './message.css'

const Message =()=>{

    return(
        <div className="message">
                <h1 className="h1">Please <Link to="/signin"><strong>Sign up</strong></Link> or <Link to="/signin"> <strong> Sign in</strong></Link> to watch a movie.</h1>
        </div>
    );
        
}

export default Message;