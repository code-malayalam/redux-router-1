import { useSelector, useDispatch } from "react-redux";
import {  decrementAction, incrementAction, resetAction  } from "../reducers/counter";


function Counter() {

    const value = useSelector((state) => {
        return state.counter;
    });

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <label>{value}</label>
            </div>
            <div>
                <button onClick={() => {
                   dispatch(incrementAction(2));
                }}>Increment</button>


                <button onClick={() => {
                    dispatch(decrementAction(1));
                }}>Decrement</button>

                <button onClick={() => {
                    dispatch(resetAction());
                    
                }}>Reset</button>
            </div>
        </div>
    );
}



export default Counter;