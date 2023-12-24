import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./component/admin/LoginPage"
import PrivatePage from "./component/admin/PrivatePage"
import Dashboard from "./component/admin/Dashboard"
import ProductDashboard from "./component/admin/ProductDashBoard"
import AddProduct from "./component/admin/AddProduct"
import AddSpecs from "./component/admin/AddSpecs"
import "./style.css"
import AuthProvider from "./context/AuthContext"
import CurrentProductProvider from "./context/CurrentProductContext"
import AddPurchaseLinks from "./component/admin/AddPurchaseLinks"


const App = () => {
    return (

        <BrowserRouter>
            <AuthProvider>
                <CurrentProductProvider>
                <Routes>
                    <Route path="/dashboard" element={<PrivatePage />}>

                        <Route element={<Dashboard />}>
                            <Route path="product" element={<ProductDashboard />} />
                            <Route path="topFive" element={<h1>TopFive</h1>} />
                            <Route path="news" element={<h1>News</h1>} />
                            <Route path="analytics" element={<h1>Google Analytics</h1>} />
                            <Route path="addProduct" element={<AddProduct />} />
                            <Route path="addSpecs/:id" element={<AddSpecs/>}></Route>
                            <Route path="addPurchaseLinks/:id" element={<AddPurchaseLinks/>}/>
                        </Route>
                    </Route>

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<p>404 Page not found</p>}></Route>

                </Routes>
                </CurrentProductProvider>
            </AuthProvider>


        </BrowserRouter>

    )
}
export default App