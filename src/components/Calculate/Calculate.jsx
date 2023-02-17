

const Calculate = (props) => {
    const { calculated, decreaseValue, increaseValue } = props;
    return <>
        <h3 data-testid='result'>Result : {calculated}</h3>
        <button data-testid='increase' onClick={increaseValue}>+</button>
        <button data-testid='decrease' onClick={decreaseValue}>-</button>
    </>
}

export default Calculate;