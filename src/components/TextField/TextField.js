// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {TextField} from '@material-ui/core';

// class TextField_Component extends Component {
//     render() {
//         if (this.props.input === '') {
//             return (
//                 <TextField
//                     id="outlined-basic"
//                     label="Feeling" 
//                     variant="outlined"
//                     type='number'
//                     placeholder='1-10'
//                     min='0' 
//                     max='10'
//                     onChange={this.props.onChangeFeeling}
//                     error
//                     helperText='Incorrect entry'
//                 />
//             );
//         }
//         else {
//             return (
//                 <TextField
//                     id="outlined-basic"
//                     label="Feeling" 
//                     variant="outlined"
//                     type='number'
//                     placeholder='1-10'
//                     min='0' 
//                     max='10'
//                     onChange={this.props.onChangeFeeling}
//                 />
//             );
//         }
//     }
// }

// export default connect()(TextField_Component);