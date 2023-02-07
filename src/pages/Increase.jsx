import { useCalculate } from '@components/Calculate/hooks/useCalculate';
import Calculate from '@components/Calculate/Calculate';
import BreadcrumbSection from '@components/Breadcrumb';
const Increase = () => {
    const { calculated, decreaseValue, increaseValue } = useCalculate();
    return <>
        <BreadcrumbSection titlePage='Increase & Decrease' />
        <h1>Increase & Decrease</h1>
        <Calculate calculated={calculated} decreaseValue={decreaseValue} increaseValue={increaseValue} />
    </>
}


export default Increase;
