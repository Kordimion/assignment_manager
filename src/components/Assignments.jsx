import { Paper, List, Divider } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import AssignmentInput from './AssignmentInput'
import AssignmentItem from './AssignmentItem'

const mapStateToProps = (state) => {
    return {
        ids: state.assignments.map(obj => obj.id)
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
