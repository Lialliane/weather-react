import {useState } from "react";
import './UnitButtons.css';

export default function UnitButtons(){
    let [unitSelected, setUnitSelected] = useState('c');
  
    function updateUnit(){
      if(unitSelected==='c'){
        setUnitSelected('f');
      }
      else
      setUnitSelected('c');
    }
  
    if(unitSelected==='c'){
    return <span className="unit-buttons"><button className="temperature-unit-selector selected" >°C</button> | <button className="temperature-unit-selector deselected" onClick={updateUnit}>°F</button></span> 
    }
    else
    return <span className="unit-buttons"><button className="temperature-unit-selector deselected" onClick={updateUnit}>°C</button> | <button className="temperature-unit-selector selected">°F</button></span> 
  }