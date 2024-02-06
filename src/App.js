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
import SingleReview from "./component/SingleReview"
import ScrollView from "./component/ReviewpageComponets.js/ScrollView"
import SLAView from "./component/SLAComponents/SLAView"
import FDMView from "./component/FDMAComponents/FDMView"
import ScannerView from "./component/SCANNERComponents/ScannerView"
import CutterView from "./component/CUTTERComponents/CutterView"
import ComparePage from "./component/ComparisonComponet/ComparePage"
import ShowFilament from "./component/ShowFilament"
import TopFive from "./component/admin/TopFive"
import News from "./component/admin/News"
import AddNews from "./component/admin/AddNews"



const App = () => {
    return (

        <BrowserRouter>
            <AuthProvider>
                <CurrentProductProvider>

                    <Routes>
                        <Route element={<Navigationbar />}>
                            <Route path="/ComparisonPage" element={<ComparePage />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/filament" element={<ShowFilament />} />
                            <Route path="/result/:fdm/:price/:product" element={<ComparePage />}/>
                            <Route path='/comparision' element={<CompareResult/>} />
                            <Route path="/result/sla/:price/:manufacture" element={<ComparePage />} />
                            <Route path="/result/scanner/:price/:manufacture" element={<ComparePage />} />
                            <Route path="/result/cutter/:price/:manufacture" element={<ComparePage />} />
                            <Route path="/product" element={<Review />} >
                                <Route path="all3dprinter" element={<ScrollView />} />
                                <Route path="fdm" element={<FDMView />} />
                                <Route path="sla" element={<SLAView />} />
                                <Route path="scanner" element={<ScannerView />} />
                                <Route path="cutter" element={<CutterView />} />
                            </Route>
                            <Route path="/productreview/:id" element={<SingleReview />} >
                                <Route path="allmostimportant" element={<SingleReview />} />
                            </Route>
                        </Route>
                        
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route path="product" element={<ProductDashboard />} />
                            <Route path="topFive" element={<TopFive/>} />
                            <Route path="news" element={ <News/> } />
                            <Route path="addNews" element={ <AddNews/> } />
                            <Route path="updateNews/:id" element={ <AddNews/> } />
                            <Route path="analytics" element={<h1>Google Analytics</h1>} />
                            <Route element={<NavigationForAddForm/>}>
                            <Route path="addProduct" element={<AddProduct />} />
                            <Route path="addSpecs/:id" element={<AddSpecs/>}></Route>
                            <Route path="addPurchaseLinks/:id" element={<AddPurchaseLinks/>}/>
                            <Route path="addReview/:id" element={<AddReview/>}/>
                            <Route path="updateproduct/:id" element={<UpdateProduct/>}/>
                            </Route>
                        </Route>

                        <Route path="/login" element={<LoginPage />} />
                        <Route path="*" element={<p>404 Page not found</p>}/>
                    </Routes>

                </CurrentProductProvider>
            </AuthProvider>


        </BrowserRouter>

    )
}
export default App