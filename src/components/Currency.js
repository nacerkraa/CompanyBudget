import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);
  const [currencyTitle, setCurrencyTitle] = useState("£ Pound");
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

    const handleSelect = (e) => {
        switch (e) {
            case "£":
                setCurrencyTitle("$ Pound")
                break;

            case "$":
                setCurrencyTitle("$ Dollar")
                break;
            case "€":
                setCurrencyTitle("€ Euro")
                break;
            
            case "₹":
                setCurrencyTitle("₹ Ruppee")
                break;
        
            default:
                break;
        }
        changeCurrency(e);
    }
    

  return (
        
    //     <div className='alert alert-secondary'> {
    //   <select className="form-select" title="Currency" name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
    //     <option selected>Currency</option>
    //     <option value="£">£ Pound</option>
    //     <option value="$">$ Dollar</option>
    //     <option value="€">€ Euro</option>
    //     <option value="₹">₹ Ruppee</option>
        
    //   </select>	
    //   }	
    // </div>
    <div className='alert alert-secondary'> {
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle style={{color: "white",fontWeight:"bold" ,backgroundColor: "#94e59a", border:"none"}}>
        Currency ({currencyTitle})
      </Dropdown.Toggle>

      <Dropdown.Menu style={{color: "white",fontWeight:"bold" ,backgroundColor: "#94e59a"}} className='DropMenu'>
        <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
        <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
        <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
        <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    }	
    </div>
    );
};

export default Currency;