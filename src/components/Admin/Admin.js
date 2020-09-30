import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import '../components.css';

class Admin extends Component {
    render() {
        return (
            <Paper elevation={3} className='paperTable'>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Feeling</TableCell>
                                <TableCell align='center'>Comprehension</TableCell>
                                <TableCell align='center'>Support</TableCell>
                                <TableCell align='left'>Comments</TableCell>
                                <TableCell align='center'>Flag</TableCell>
                                <TableCell align='center'>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.feedback.map(item =>
                                <TableRow key={item.id}>
                                    <TableCell 
                                        component='th' 
                                        scope='row'
                                        align='center'
                                        className='numberCell'>
                                        {item.feeling}
                                    </TableCell>
                                    <TableCell 
                                        align='center'
                                        className='numberCell'>
                                        {item.understanding}
                                    </TableCell>
                                    <TableCell 
                                        align='center'
                                        className='numberCell'>
                                        {item.support}
                                    </TableCell>
                                    <TableCell 
                                        align='left'
                                        className='commentsCell'>
                                        {item.comments}
                                    </TableCell>
                                    <TableCell  
                                        align='center'>
                                        {item.flagged}
                                    </TableCell>
                                    <TableCell 
                                        align='center'>
                                        <Button 
                                            color='secondary' 
                                            variant='contained'
                                            onClick={() => this.props.onDelete(item.id)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        );
    }
}
export default connect()(Admin);