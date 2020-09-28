import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

class Admin extends Component {
    render() {
        return (
            <Paper elevation={3}>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Comprehension</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Flag</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.feedback.map(item =>
                                <TableRow component='th' scope='row'>
                                    <TableCell align='left'>{item.feeling}</TableCell>
                                    <TableCell align='left'>{item.understanding}</TableCell>
                                    <TableCell align='left'>{item.support}</TableCell>
                                    <TableCell align='left'>{item.comments}</TableCell>
                                    <TableCell align='left'>Flagged?</TableCell>
                                    <TableCell align='left'>
                                        <Button 
                                            color='secondary' 
                                            variant='contained'>
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