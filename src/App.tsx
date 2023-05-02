import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Dispatch } from './store';
import { RematchRootState } from '@rematch/core';
import { RootModel } from './models';
import { useState } from 'react';

function App() {
    const count = useSelector<RematchRootState<RootModel>, any>(
        (state) => state.count
    );
    const dispatch = useDispatch<Dispatch>();
    const [localCount, setLocalCount] = useState(0);

    const incrementHandler = () => {
        dispatch.count.increment(1);
        setLocalCount(count);
    };

    const decrementHandler = () => {
        dispatch.count.decrement(1);
        setLocalCount(count);
    };

    return (
        <div>
            <div>{localCount}</div>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler}>decrement</button>
        </div>
    );
}

export default App;
