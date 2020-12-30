import { Paper, List, Divider } from '@material-ui/core'
import React from 'react'
import AssignmentInput from './AssignmentInput'
import AssigmnentItem from './AssignmentItem'

function Assignments() {
    return (
        <Paper>
            <List aria-label="assignments">
                <AssignmentInput />
                <Divider />
                <AssigmnentItem />
                <AssigmnentItem />
                <AssigmnentItem />
            </List>
        </Paper>
    )
}

export default Assignments
