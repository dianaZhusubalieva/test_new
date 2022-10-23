import React from 'react';
import {Route, Routes} from "react-router-dom";
import * as urls from "urls"
import HomePage from "./home/HomePage";
import MyNavbar from "../components/Navbar";

const PageRouter = () => {
    return (
        <>
            <MyNavbar/>
            <Routes>
                <Route path={urls.HOME + '*'} element={<HomePage />} />
            </Routes>
        </>
    );
};

export default PageRouter;


