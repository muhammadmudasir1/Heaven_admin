import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./component/LoginPage"
import PrivatePage from "./component/PrivatePage"
import Dashboard from "./component/Dashboard"
import ProductDashboard from "./component/ProductDashBoard"
import AddProduct from "./component/AddProduct"
import "./style.css"
import AuthProvider from "./context/AuthContext"
import CurrentProductProvider from "./context/CurrentProductContext"
import AddSpecs from "./component/AddSpecs"
import Home from "./component/Home"
import Navigationbar from "./component/Landingpage/Navigationbar"
import Review from "./component/Review"
import OneReview from "./component/OneReview"


const App = () => {
    return (

        <BrowserRouter>
            <AuthProvider>
                <CurrentProductProvider>
                <Routes>
                    <Route element={<Navigationbar/>}>
                    <Route path="/" element= {<Home/>}/>
                    <Route path="/Review" element= {<Review/>}/>
                    <Route path="/OneReview" element= {<OneReview/>}/>
                    
                    </Route>
                    <Route path="/dashboard" element={<PrivatePage />}>

                        <Route element={<Dashboard />}>
                            <Route path="product" element={<ProductDashboard />} />
                            <Route path="topFive" element={<h1>TopFive</h1>} />
                            <Route path="news" element={<h1>News</h1>} />
                            <Route path="analytics" element={<h1>Google Analytics</h1>} />
                            <Route path="addProduct" element={<AddProduct />} />
                            <Route path="addSpecs/:id" element={<AddSpecs/>}></Route>
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