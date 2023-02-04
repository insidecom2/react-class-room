

const Calculate = (props) => {
    const { calculated, decreaseValue, increaseValue } = props;
    return <>
        <h3>Result : {calculated}</h3>
        <button onClick={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
    </>
}

export default Calculate;