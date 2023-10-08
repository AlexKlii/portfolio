import React, { ReactElement } from 'react'
import Tooltip from '@mui/material/Tooltip';

export default function Skill({ title, skillElement, placement }: {
    title: string,
    skillElement: ReactElement
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'
}) {
    return (
        <Tooltip title={title} placement={placement ? placement : 'bottom'}>
            <span>{skillElement}</span>
        </Tooltip>
    )
}