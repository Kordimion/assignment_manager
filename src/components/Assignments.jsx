import { Paper, List, Divider } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import AssignmentInput from './AssignmentInput'
import AssignmentItem from './AssignmentItem'

const mapStateToProps = (state) => {
    let assignmentIds = []
    if(state.currentLesson !== ''){
        const {assignments} = state;
        for(const id in assignments) {
            if(assignments[id].lesson === undefined || assignments[id].lesson === state.currentLesson) assignmentIds.push(id)
        }
    } else assignmentIds = Object.keys(state.assignments);
    
    return {
        ids: assignmentIds 
    };
}

function Assignments(props) {
    return (
        <Paper>
            <List aria-label="assignments">
                <AssignmentInput />
                <Divider />
                {props.ids.map((id) => (
                    <AssignmentItem id={id} key={id} />
                ))}
            </List>
        </Paper>
    )
}

export default connect(mapStateToProps)(Assignments);
