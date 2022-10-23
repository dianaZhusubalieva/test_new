import React from 'react';
import {Route, Routes} from "react-router-dom";
import * as urls from "urls"
import HomePage from "./home/HomePage";
import MyNavbar from "../components/Navbar";
import DetailPostPage from "./DetailPostPage";

const PageRouter = () => {
    return (
        <>
            <MyNavbar/>
            <Routes>
                <Route path={urls.HOME + '*'} element={<HomePage />} />
                <Route path={urls.POST} element={<DetailPostPage />} />


            </Routes>
        </>
    );
};

export default PageRouter;


