 import React from 'react';
 import {
     BrowserRouter as Router,
     Route,
     Switch
 } from 'react-router-dom';
 import UserForm from '../userForm';
 import UserData from '../userData/userData';
 //import UserData from '../userData';

 class Root extends React.Component{
     render(){
         return(
             <Router>
                 <Switch>
                    <Route exact path="/">
                        <UserForm/>
                     </Route>
                     <Route exact path="/userForm">
                        <UserForm/>
                     </Route>
                     <Route path="/userData">
                        <UserData/>
                     </Route>
                 </Switch>
             </Router>
         )
     }
 }

 export default Root;