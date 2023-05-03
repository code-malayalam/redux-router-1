
import App from "./pages/App";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

import { BrowserRouter, Route, Routes, Link, Outlet, RouterProvider, createBrowserRouter, createRoutesFromElements  } from "react-router-dom";
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
import Base from "./Base";


async function getMyData() {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
}


function MyRoutes(params) {


    //   const router = createBrowserRouter([
    //     {
    //       path: "/",
    //       element: <Base />,
    //       loader: getMyData,
    //       id: 'base',
    //       children: [
    //         {
    //           index: true,
    //           element: <App />,
    //         },
    //         {
    //             path: "settings",
    //             element: <Settings />,
                
    //         },
    //         {
    //             path: "home",
    //             element: <Home />,
    //         },
    //         {
    //             path: "details/:id",
    //             element: <Details />,
    //             children: [
    //                 {
    //                     index: true,
    //                     element: <AddressInfo />,
    //                 },
    //                 {
    //                     path: "personal",
    //                     element: <PersonalInfo />,
    //                 },
    //                 {
    //                     path: "others",
    //                     element: <OtherInfo />,
    //                 },
    //             ]
    //         },
    //         {
    //             path: "*",
    //             element: <NotFound />,
    //         },
            
    //       ],
    //     },
    //   ]);

      const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Base />} id="base" loader={getMyData}>
                <Route index element={<App />}/>
                <Route path="settings" element={<Settings />} />
                <Route path="home" element={<Home />}/>
                <Route path="details/:id" element={<Details />}>
                    <Route index element={<AddressInfo />}/>
                    <Route path="personal" element={<PersonalInfo />}/>
                    <Route path="others" element={<OtherInfo />}/>
                </Route>
                <Route path="*" element={<NotFound />}/>
            </Route>
        )
      );
      


    return (
        <RouterProvider router={router} />
    );
}

export default MyRoutes;
