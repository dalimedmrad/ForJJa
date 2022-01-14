import React from 'react'
import { Redirect, Route } from 'react-router';

const AdminRouter = ({component:Component,...rest}) => {
    
    const isAdmin = localStorage.getItem('isAdmin');
    if(isAdmin){
       return <Route component={Component} {...rest} />;
    }
    return <Redirect to="/"/>;
   
}

export default AdminRouter;
