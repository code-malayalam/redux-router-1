import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowDelete } from '../reducers/showDelete';


function PageHeader () {
    const showDelete = useSelector((state) => state.showDelete);
    const dispatch = useDispatch();

    return (
        <div>
        I AM PAGE HEADER
        <div>
        <label>Enable Delete</label>
        <input type='checkbox' checked={showDelete} onChange={(evt) => {
                dispatch(setShowDelete(evt.target.checked));
        }} />
        </div>
        </div>
    )
}
export default PageHeader;

