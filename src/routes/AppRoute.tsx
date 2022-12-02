import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { Form } from "../pages/Form"
import { Generate } from "../pages/Generated"
import { Home } from "../pages/Home"

export const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/node-backend/" element={<Home />} />
                    <Route path="/node-backend/Form" element={<Form />} />
                    <Route path="/node-backend/generate" element={<Generate />} />
                    <Route path="/node-backend/generate/*" element={<Generate />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}