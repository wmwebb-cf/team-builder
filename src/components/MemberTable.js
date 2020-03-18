import React, { useState } from 'react';
import { Table } from 'reactstrap';
import '../App.css';
import teamMembers from '../teamMembers';

const MemberTable = props => {

    console.log(props);

    return(
        <Table>
            <thead className='row-head'>
                <tr>
                    <th>ID#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {teamMembers.map( member => 
                    (
                        <tr key={member.id}>
                            <td scope="row">{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.position}</td>
                        </tr>
                    )
                )}
                {props.formState.map(user => 
                    (
                        <tr key={user.id}>
                            <td scope="row">{user.id}</td>
                            <td>{user.position}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                    
                )}
            </tbody>
        </Table>
    )
}


  export default MemberTable;