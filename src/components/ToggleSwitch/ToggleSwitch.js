import React from 'react';
import './ToggleSwitch.css'

const ToggleSwitch = () => {
    const handleSwitchChange = (e) => {
        console.log(e.target.value) 
    }

    return (
        <label className='switch'>
            <input type='checkbox' className='switch__box' onChange={handleSwitchChange} />
            <span></span>
        </label>
    )
}

export default ToggleSwitch;