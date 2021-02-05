import React from 'react'

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'

function SidebarContent() {
    return (
        <> 
            <Button variant="contained" color="primary">Inbox</Button>
            <Divider />
            <Button variant="contained" color="secondary">Other</Button>
        </>
    )
}

export default SidebarContent
