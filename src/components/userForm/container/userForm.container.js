import React from 'react';
import { connect } from 'react-redux';
import UserForm from '../views/userForm.view';
import { withRouter } from "react-router-dom";

// import { updateUserRecords } from './userForm.actions';
// import { replaceRecords } from '../../userData/container/userData.actions';

class UserFormContainer extends React.Component {
    submitUserForm = values => {
        const {history} = this.props
        //const { history, updateRecords, location: { state: { index = null } = {} } = {}, replaceRecords, userData } = this.props;
        console.log(values)
        history.push("/userData", values)
    }

    render() {
      
        return (
            <UserForm onSubmit={this.submitUserForm}  />
        )
    }
}

// const mapStateToProps = state => {
//     const { userDataReducer: { userData = [] } = [] } = state;
//     return {
//         userData,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         updateRecords: (records) => {
//             dispatch(updateUserRecords(records))
//         },
//         replaceRecords: (records) => {
//             dispatch(replaceRecords(records));
//         }
//     };
// }

UserFormContainer = connect(
    null,
    null
)(UserFormContainer);

export default withRouter(UserFormContainer);