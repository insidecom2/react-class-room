import { useState } from 'react';


export const useCalculate = () => {

    const [calculated, setValue] = useState(0);

    const increaseValue = () => {
        setValue(calculated + 1);
    }

    const decreaseValue = () => {
        setValue(calculated - 1);
    }

    return {
        calculated,
        decreaseValue,
        increaseValue
    }
}
