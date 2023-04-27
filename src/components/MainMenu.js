import { NavLink  } from "react-router-dom";
import './MainMenu.scss';

function MainMenu() {
    return (
        <div className="main-menu">
            <NavLink to='/'> App </NavLink>
            <NavLink to='settings'> Settings </NavLink>
            <NavLink to='home'> Home </NavLink>
        </div>
    );
}

export default MainMenu;