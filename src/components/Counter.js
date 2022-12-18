import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../feautures/counter/counterSlice';
export const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    );
}