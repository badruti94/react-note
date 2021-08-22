import React, { useState } from 'react'
import './alert.css'

const Alert = ({ status, message }) => {
    return (
        <div className={"alert-" + status} >
            {message}
        </div>
    )
}

export default Alert
