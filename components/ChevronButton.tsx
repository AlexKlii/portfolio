import React, { MouseEventHandler } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const ChevronButton = ({ disabled, color, onClick, direction = 'left', size = 32 }: { disabled: boolean, color: string, onClick: () => void, direction?: 'right' | 'left', size?: number }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={'left' === direction ? 'pr-3 sm:pr-10': 'pl-3 sm:pl-10'}>
            {direction === 'left'
                ? <FaChevronCircleLeft color={color} size={size} className='w-14 h-14 max-sm:w-9 max-sm:h-9' />
                : <FaChevronCircleRight color={color} size={size} className='w-14 h-14 max-sm:w-9 max-sm:h-9' />
            }
        </button>
    )
}

export default ChevronButton