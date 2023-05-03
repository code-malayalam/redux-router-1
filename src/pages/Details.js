import { useSelector } from "react-redux";
import { Link, NavLink, Outlet, Route, Routes, useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import { AddressInfo } from "./AddressInfo";
import './Details.scss';
import { OtherInfo } from "./OtherInfo";
import { PersonalInfo } from "./PersonalInfo";


function Details() {

    const {id} = useParams();
    const details = useRouteLoaderData('base') || [];

    const data = details.find((item) => {
        return item.id === id;
    }) || {};

    const {
        title, 
        subtitle,
        isActive
    } = data;

    const navigate = useNavigate();
    
    console.log(data);
    return (
        <div className="details">
            <Link to="..">Back</Link>
            <div>
                Title: {title}
            </div>
            <div>
                Sub Title: {subtitle}
            </div>
            <div>
                {isActive ? 'ACTIVE': 'NON ACTIVE'}
            </div>
            <div className="sub-info">
                <div className="sub-header main-menu">
                    <NavLink end to=""> Address </NavLink>
                    <NavLink to="personal"> Personal Info </NavLink>
                    <NavLink to="others"> Other Info </NavLink>
                </div>
                <div className="sub-details ">
                    <Outlet />
                </div>

            </div>
            <button onClick={() => {
                navigate('..');
            }}>Go Back</button>
           
        </div>
    );
}

export default Details;
