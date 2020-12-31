import { Paper, List, Divider } from '@material-ui/core'
import React, { useState } from 'react'
import AssignmentInput from './AssignmentInput'
import AssignmentItem from './AssignmentItem'
import { v4 as uuidv4 } from 'uuid';

function Assignments() {
    const [assignments, setAssignments] = useState([]);
    
    
    const addAssignment = (title) => { 
        setAssignments([{
            title: title,
            id: uuidv4(),
            isCompleted: false
        },...assignments]);
    }

    const removeAssignment = (id) => () => {
        setAssignments(assignments.filter(assignment => assignment.id !== id));
    }

    const completeAssignment = (id) => (flag) => {
        setAssignments(assignments.map(assignment => {
            if(assignment.id === id) assignment.isCompleted = flag ;
            return assignment;
        }))
        console.log(assignments);
    }

    return (
        <Paper>
            <List aria-label="assignments">
                <AssignmentInput add={addAssignment} />
                <Divider />
                {assignments.map(assignment => {
                    const { id, title } = assignment;
                    return (
                        <AssignmentItem 
                            title={title} 
                            id={id} 
                            key={id}
                            complete={completeAssignment(id)}
                            remove={removeAssignment(id)} 
                        />
                    )
                })}
            </List>
        </Paper>
    )
}

export default Assignments
