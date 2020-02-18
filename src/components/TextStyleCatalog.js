import React from 'react'
import './TextStyleCatalog.css'

const TextStyleCatalog = (props) => {
    return (
        <div className='text-style-content'>
            {props.children}
        </div>
    )
}

export default TextStyleCatalog