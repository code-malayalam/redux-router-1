
import { useState } from 'react';
import { useInputHook } from './customHooks';
import './DetailsInput.css';

function DetailsInput(props) {
    const {
        onSubmit,
    } = props;

   
    const [isActive, setIsActive] = useState(false);

    const [title, titleCb] = useInputHook();
    const [subTitle, subTitleCb] = useInputHook();

    

    const handleClick = () => {
        console.log('ON SUBMIT');
        onSubmit({
            title,
            subTitle,
            isActive
        });
    }


    const handleIsActiveChange = (evt) => {
        setIsActive(evt.target.checked)
    }


    return (
        <div className="DetailsInput">
            <div>
                <label>Title: </label>
                <input value={title} onChange={titleCb}/>
            </div>
            <div>
                <label>Sub Title: </label>
                <input value={subTitle} onChange={subTitleCb}/>
            </div>
            <div>
                <label>isActive: </label>
                <input type="checkbox" checked={isActive} onChange={handleIsActiveChange}/>
            </div>
            <div>
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}


DetailsInput.defaultProps = {
    onSubmit: () => {}
};


export default DetailsInput;
