import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Categories from '../Layout/categories/Categories.jsx';
import Cats from "../Layout/catsBox/Cats.jsx"

const RootRoute = () => {

    return (
        <>
            <Categories />
            <Routes>
                <Route path={"/"} element={<Cats />} />
                <Route path={"/:name"} element={<Cats />} />
            </Routes>
        </>
    )
}

export default RootRoute;