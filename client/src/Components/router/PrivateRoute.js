import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({component:Component,...rest}) => {
    
    const isAuth = localStorage.getItem("token");
    if(isAuth){
       return <Route component={Component} {...rest} />;
    }else{
        return <Redirect to="/message"/>;
    }
   
}

export default PrivateRoute;
