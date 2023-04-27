
import App from "./pages/App";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

import { BrowserRouter, Route, Routes, Link  } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainMenu from "./components/MainMenu";
import Details from "./pages/Details";
import Test from "./pages/Test";
import { useEffect } from "react";
import { fetchUserInfo } from "./reducers/userInfo";
import { useDispatch } from "react-redux";
import { AddressInfo } from "./pages/AddressInfo";
import { PersonalInfo } from "./pages/PersonalInfo";
import { OtherInfo } from "./pages/OtherInfo";


function MyRoutes(params) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserInfo());
      }, []);


    return (
        <BrowserRouter>
            <MainMenu />
            <Routes>
                <Route index element={<App />}/>
                <Route path="settings" element={<Settings />}/>
                <Route path="home" element={<Home />}/>
                <Route path="details/:id" element={<Details />}>
                    <Route index element={<AddressInfo />}/>
                    <Route path="personal" element={<PersonalInfo />}/>
                    <Route path="others" element={<OtherInfo />}/>
                </Route>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;
