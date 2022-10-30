import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import ThankYou from '../pages/ThankYou/ThankYou'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/ty" element={<ThankYou />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router