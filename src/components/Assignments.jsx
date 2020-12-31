import { Paper, List, Divider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AssignmentInput from './AssignmentInput'
import AssignmentItem from './AssignmentItem'
import { v4 as uuidv4 } from 'uuid';

function Assignments() {
    const [assignments, setAssignments] = useState([]);
    
    useEffect(() => {
        setAssignments(JSON.parse(localStorage.getItem("assignments")))
    },[])
    
    const addAssignment = (title) => { 
        const updated = [{
            title: title,
            id: uuidv4(),
            isCompleted: false
        },...assignments];

        setAssignments(updated);
        localStorage.setItem("assignments", JSON.stringify(updated));
    }

    const removeAssignment = (id) => () => {
        const updated = assignments.filter(assignment => assignment.id !== id);
        setAssignments(updated);
        localStorage.setItem("assignments", JSON.stringify(updated));
    }

    const completeAssignment = (id) => (flag) => {
        const updated = assignments.map(assignment => {
            if(assignment.id === id) assignment.isCompleted = flag ;
            return assignment;
        })

        setAssignments(updated)
        localStorage.setItem("assignments", JSON.stringify(updated));
    }

    return (
        <Paper>
            <List aria-label="assignments">
                <AssignmentInput add={addAssignment} />
                <Divider />
                {assignments.map(assignment => {
                    const { id, title, isCompleted } = assignment;
                    return (
                        <AssignmentItem 
                            title={title} 
                            id={id} 
                            key={id}
                            isCompleted={isCompleted}
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
