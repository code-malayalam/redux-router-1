import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyAppContext } from "./pages/App";
import './HeaderDetails.scss';


function  HeaderDetails(props) {
    const {
        title,
        id,
        isActive
    } = props;


    const val = useContext(MyAppContext);

    return (
        <Link className="header-details" to={`/details/${id}`}>
            <div>Title: {title}</div>
            <div>{isActive? 'ACTIVE' : 'NON ACTIVE'}</div>
        </Link>
    );
}

export default HeaderDetails;
