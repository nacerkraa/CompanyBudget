import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [cost, setCost] = useState(budget);

    // if(cost > remaining) {
    //     alert("The value cannot exceed remaining funds  £"+remaining);
    // }

    // if(cost < expenses) {
    //     alert("You can not reduce the budget value lower than the spending ");
    // }
    
    return (
        
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input type="number" value={cost} onChange={(event) => setCost(event.target.value)}/></span>
            
        </div>
    );
};

export default Budget;
