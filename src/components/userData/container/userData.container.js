// import React from 'react';
// import { connect } from 'react-redux';
// import UserData from '../views/userData.view';
// import { withRouter } from "react-router-dom";

// // import { updateUserRecords } from './userForm.actions';
// // import { replaceRecords } from '../../userData/container/userData.actions';

// class UserDataContainer extends React.Component {
  
//     //getUserData = values => {
//        //const { location: { state: { } = {} }} = this.props
     
//        //const  { location: {state={} = {}}}= this.props;
//         //const { location: { state = {} } = {} } = this.props;
//         //console.log(location)
//     //}
   

//     render() {
//         const { location: { state = {} } = {} } = this.props;
//         return (
//             <UserData  onload={this.getUserData}/>
//         )
//     }
// }

// // const mapStateToProps = state => {
// //     const { userDataReducer: { userData = [] } = [] } = state;
// //     return {
// //         userData,
// //     };
// // };

// // const mapDispatchToProps = dispatch => {
// //     return {
// //         updateRecords: (records) => {
// //             dispatch(updateUserRecords(records))
// //         },
// //         replaceRecords: (records) => {
// //             dispatch(replaceRecords(records));
// //         }
// //     };
// // }

// UserDataContainer = connect(
//     null,
//     null
// )(UserDataContainer);

// export default withRouter(UserDataContainer);