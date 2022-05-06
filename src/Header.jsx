import React from 'react'
import './huita.css'
export default function Header({change}) {
    return( 
        <div className='header' >
            <h1>Where in the world?</h1>
            <button id = 'btn' onClick={change}>Dark Mode 🌙</button>
        </div>
    )
};
