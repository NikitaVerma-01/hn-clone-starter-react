import React from 'react';
import { withRouter } from "react-router-dom";

class UserData extends React.Component{
    render(){
        const { history, location: { state = {} } = {} } = this.props;
        let state1 = [];
        state1.push(state);
        return(
            <React.Fragment>
                 <table className="table table-hover">
                <thead>
                    <tr>
                        <th>FName</th>
                        <th>LName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                        state1.map((element,index) => (
                        <tr key={index}>
                            <td>{element.firstName}</td> 
                            <td>{element.lastName}</td>
                            <td>{element.email}</td>
                            <td>{element.phone}</td>
                            <td><button className="btn btn-success">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        ))
                        }   
                    </tbody>
                </table>
                <button className="btn btn-success" onClick={() => history.push('/')}>GO BACK</button>
            </React.Fragment>
        )
    }
}

export default withRouter(UserData);