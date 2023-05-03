import { Outlet, useNavigation } from "react-router-dom";
import MainMenu from "./components/MainMenu";

export default function Base() {
    const navigation = useNavigation();
    console.log('#####', navigation);
    return (
        <div>
            <MainMenu />
            <Outlet />
        </div>
    );
}