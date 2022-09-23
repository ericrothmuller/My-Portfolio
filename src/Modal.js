import React from 'react'

export default function Modal({ open, body}) {
    if (!open) return null
    
    return (
        <div>
            {body}
        </div>
    )
};