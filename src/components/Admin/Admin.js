import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminItem from './AdminItem/AdminItem';

class Admin extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.feedback.map(item =>
                            <AdminItem
                                key={item.id}
                                feeling={item.feeling}
                                understanding={item.understanding}
                                support={item.support}
                                comments={item.comments}
                            />
                    )}
                </tbody>
            </table>
        );
    }
}
export default connect()(Admin);