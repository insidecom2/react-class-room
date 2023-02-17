
import { render, screen, act, renderHook, Simulate, fireEvent } from '@testing-library/react';
import { useCalculate } from '../hooks/useCalculate';
import Calculate from '../Calculate'

describe('useCalculate hook', () => {
    it('checking default state', () => {
        const { result } = renderHook(() => useCalculate())

        expect(result.current.calculated).toBe(0)
        expect(result.current.increaseValue).toBeInstanceOf(Function)
        expect(result.current.decreaseValue).toBeInstanceOf(Function)

        render(<Calculate calculated={result.current.calculated} />)

        const element = screen.getByTestId('result')
        expect(element).toHaveTextContent('Result : 0')
    })

    it('increaseValue state', () => {
        const { result } = renderHook(() => useCalculate())

        expect(result.current.calculated).toBe(0)
        act(() => {
            result.current.increaseValue()
        })
        expect(result.current.calculated).toBe(1)

        render(<Calculate calculated={result.current.calculated} />)

        const element = screen.getByTestId('result')
        expect(element).toHaveTextContent('Result : 1')
    })

    it('decreaseValue state', () => {
        const { result } = renderHook(() => useCalculate())

        expect(result.current.calculated).toBe(0)
        act(() => {
            result.current.decreaseValue()
        })
        expect(result.current.calculated).toBe(-1)

        render(<Calculate calculated={result.current.calculated} />)

        const element = screen.getByTestId('result')
        expect(element).toHaveTextContent('Result : -1')
    })

    it('decreaseValue 2 times state', () => {
        const { result } = renderHook(() => useCalculate())

        expect(result.current.calculated).toBe(0)
        act(() => {
            result.current.decreaseValue()
        })

        act(() => {
            result.current.decreaseValue()
        })

        expect(result.current.calculated).toBe(-2)

        render(<Calculate calculated={result.current.calculated} />)

        const element = screen.getByTestId('result')
        expect(element).toHaveTextContent('Result : -2')
    })

    it('decreaseValue and increaseValue state', () => {
        const { result } = renderHook(() => useCalculate())

        expect(result.current.calculated).toBe(0)
        act(() => {
            result.current.decreaseValue()
        })
        expect(result.current.calculated).toBe(-1)

        act(() => {
            result.current.increaseValue()
        })
        expect(result.current.calculated).toBe(0)

        render(<Calculate calculated={result.current.calculated} />)

        const element = screen.getByTestId('result')
        expect(element).toHaveTextContent('Result : 0')
    })

    it('increaseValue and decreaseValue state', () => {
        const { result } = renderHook(() => useCalculate())

        expect(result.current.calculated).toBe(0)
        act(() => {
            result.current.increaseValue()
        })
        expect(result.current.calculated).toBe(1)

        act(() => {
            result.current.decreaseValue()
        })
        expect(result.current.calculated).toBe(0)

        render(<Calculate calculated={result.current.calculated} />)

        const element = screen.getByTestId('result')
        expect(element).toHaveTextContent('Result : 0')
    })

    it('fire button increase', () => {
        const increaseValue = jest.fn()
        const decreaseValue = jest.fn()
        const { result } = renderHook(() => useCalculate())
        const { getByTestId } = render(<Calculate calculated={result.current.calculated} decreaseValue={decreaseValue} increaseValue={increaseValue} />)

        const element = getByTestId('result')
        expect(element).toHaveTextContent('Result : 0')

        const increase = getByTestId('increase')
        expect(increase).toBeDefined()

        act(() => {
            fireEvent.click(increase)
        })
        expect(increaseValue).toHaveBeenCalledTimes(1)
        expect(decreaseValue).toHaveBeenCalledTimes(0)
    })

    it('fire button decrease', () => {
        const decreaseValue = jest.fn()
        const increaseValue = jest.fn()
        const { result } = renderHook(() => useCalculate())
        const { getByTestId } = render(<Calculate calculated={result.current.calculated} decreaseValue={decreaseValue} increaseValue={increaseValue} />)

        const element = getByTestId('result')
        expect(element).toHaveTextContent('Result : 0')

        const decrease = getByTestId('decrease')
        expect(decrease).toBeDefined()

        act(() => {
            fireEvent.click(decrease)
        })
        expect(decreaseValue).toHaveBeenCalledTimes(1)
        expect(increaseValue).toHaveBeenCalledTimes(0)
    })

    it('fire button increase&decreaseValue', () => {
        const increaseValue = jest.fn()
        const decreaseValue = jest.fn()
        const { result } = renderHook(() => useCalculate())
        const { getByTestId } = render(<Calculate calculated={result.current.calculated} decreaseValue={decreaseValue} increaseValue={increaseValue} />)

        const element = getByTestId('result')
        expect(element).toHaveTextContent('Result : 0')

        act(() => {
            fireEvent.click(getByTestId('increase'))
            fireEvent.click(getByTestId('decrease'))
        })
        expect(increaseValue).toHaveBeenCalledTimes(1)
        expect(decreaseValue).toHaveBeenCalledTimes(1)
    })
})



