
import { useState, useEffect, useRef } from 'react';
import './MyDiv.css';
import clsx from 'clsx';
import HeaderDetails from './HeaderDetails';
import { useSelector } from 'react-redux';

function MyDiv(props) {

    const {
        title,
        subtitle,
        extra,
        isActive = false,
        disabled,
        onDelete,
        id,
        onActiveChange
    } = props;

    const [val1, setVal1] = useState([]);
    const myRef = useRef();
    const [count, setCount] = useState(0);

    const showDelete = useSelector((state) => {
        return state.showDelete;
    });

    useEffect(() => {
        setVal1([]);
    }, []);


    function handleClick() {
        onDelete(id);
        // console.log(myRef.current.getBoundingClientRect());
        // console.log(obj);
        // myRef.current.innerHTML = 'HELLO';
        setCount('HELLO');
    }

    const val = clsx('MyDiv', {
        isActive,
        disabled,
    });


    return (
        <div className={val} ref={myRef}>
            <HeaderDetails title={title} subtitle={subtitle} />
            <div>Count = {count}</div>
            <div>
                <input type='checkbox' checked={isActive} onChange={(evt) => {
                    onActiveChange(id, evt.target.checked);
                }} />
            </div>

            {
                showDelete && <button onClick={handleClick}>Delete</button>
            }
            

        </div>
    );
}

export default MyDiv;
