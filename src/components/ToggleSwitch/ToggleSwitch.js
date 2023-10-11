import React, { useContext } from 'react';
import './ToggleSwitch.css'
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

const ToggleSwitch = () => {
    const {currentTemperatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext);

    return (
        <label className='switch' for='switch'>
            <input id='switch' type='checkbox' className='switch__box' onChange={handleToggleSwitchChange} />
            <span className='slider slider_left'>{currentTemperatureUnit}</span>
        </label>
    )
}

export default ToggleSwitch;