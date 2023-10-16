import React, { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="switch" for="switch">
      <input
        id="switch"
        type="checkbox"
        className="switch__checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span
        className='switch__slider'>
      </span>
      <p className={`switch__temp-unit-f ${currentTemperatureUnit === 'F' ? 'active' : ''}`}>F</p>
      <p className={`switch__temp-unit-c ${currentTemperatureUnit === 'C' ? 'active' : ''}`}>C</p>
    </label>
  );
};

export default ToggleSwitch;
