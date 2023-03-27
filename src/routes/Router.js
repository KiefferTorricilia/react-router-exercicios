import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import ProfilePage from '../pages/ProfilePage'
import ProductPage from "../pages/ProductPage"
import {goToHome, goToProfile} from '../routes/coordinator'


export default function Router(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}   />
            <Route path="*" element={<ErrorPage/>} />
            <Route path="/profile" element={<ProfilePage/>}  />
            <Route path="/:product" element={<ProductPage/>} />

        </Routes>

        </BrowserRouter>

        </>
    )
}