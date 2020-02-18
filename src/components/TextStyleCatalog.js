import React from 'react'
import './style/TextStyleCatalog.css'

const TextStyleCatalog = (props) => {
    return (
        <div className='text-style-content'>
            {props.children}
        </div>
    )
}

export default TextStyleCatalog