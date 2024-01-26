import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./component/admin/LoginPage"
import PrivatePage from "./component/admin/PrivatePage"
import Dashboard from "./component/admin/Dashboard"
import ProductDashboard from "./component/admin/ProductDashBoard"
import AddProduct from "./component/admin/AddProduct"
import AddSpecs from "./component/admin/AddSpecs"
import AuthProvider from "./context/AuthContext"
import CurrentProductProvider from "./context/CurrentProductContext"
import Home from "./component/Home"
import Navigationbar from "./component/Landingpage/Navigationbar"
import Review from "./component/Review"
import ComparisonPage from "./component/ComparisonPage"
import CompareResult from "./component/CompareResult"
import NavigationForAddForm from "./component/admin/NavigationForAddForm"
import AddPurchaseLinks from "./component/admin/AddPurchaseLinks"
import AddReview from "./component/admin/AddReview"
import UpdateProduct from "./component/admin/UpdateProduct"
import "./customStyle.css"
import FDM from "./component/FDM"
import SLA from "./component/SLA"
import Scanner from "./component/Scanner"
import Cutter from "./component/Cutter"
import SingleReview from "./component/SingleReview"


const App = () => {
    return (

        <BrowserRouter>
            <AuthProvider>
                <CurrentProductProvider>

                    <Routes>
                        <Route element={<Navigationbar />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/ComparisonPage" element={<ComparisonPage/>} />
                            <Route path="/Review" element={<Review />} />
                            <Route path="/singlereview" element={<SingleReview/>}/>
                            <Route path="/CompareResult" element={<CompareResult/>}/>
                            <Route path="/all3dprinter" element={<Review/>}/>
                            <Route path="/fdm" element={<FDM/>} />
                            <Route path="/sla" element={<SLA/>}/>
                            <Route path="/scanner" element={<Scanner/>} />
                            <Route path="/cutter" element={<Cutter/>} />
                            <Route path="allmostimportant" element={<SingleReview/>} />
                         </Route>
                        <Route path="/dashboard" element={<PrivatePage />}>

                        <Route element={<Dashboard />}>
                            <Route path="product" element={<ProductDashboard />} />
                            <Route path="topFive" element={<h1>TopFive</h1>} />
                            <Route path="news" element={<h1>News</h1>} />
                            <Route path="analytics" element={<h1>Google Analytics</h1>} />
                            <Route element={<NavigationForAddForm/>}>
                            <Route path="addProduct" element={<AddProduct />} />
                            <Route path="addSpecs/:id" element={<AddSpecs/>}></Route>
                            <Route path="addPurchaseLinks/:id" element={<AddPurchaseLinks/>}/>
                            <Route path="addReview/:id" element={<AddReview/>}/>
                            <Route path="updateproduct/:id" element={<UpdateProduct/>}/>
                            </Route>
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