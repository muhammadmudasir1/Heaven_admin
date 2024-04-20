import { BrowserRouter, Route, Routes } from "react-router-dom"
import CompareResult from "./component/CompareResult"
import ComparePage from "./component/ComparisonComponet/ComparePage"
import Home from "./component/Home"
import Navigationbar from "./component/Landingpage/Navigationbar"
import AddBeginnersGuid from "./component/admin/AddBeginnersGuid"
import AddNews from "./component/admin/AddNews"
import AddProduct from "./component/admin/AddProduct"
import AddPurchaseLinks from "./component/admin/AddPurchaseLinks"
import AddReview from "./component/admin/AddReview"
import AddSpecs from "./component/admin/AddSpecs"
import BeginnersGuid from "./component/admin/BeginnersGuid"
import Dashboard from "./component/admin/Dashboard"
import LoginPage from "./component/admin/LoginPage"
import NavigationForAddForm from "./component/admin/NavigationForAddForm"
import News from "./component/admin/News"
import PrivatePage from "./component/admin/PrivatePage"
import ProductDashboard from "./component/admin/ProductDashBoard"
import TopFive from "./component/admin/TopFive"
import UpdateProduct from "./component/admin/UpdateProduct"
import UserPage from "./component/admin/users/UserPage"
import AuthProvider from "./context/AuthContext"
import CurrentProductProvider from "./context/CurrentProductContext"
import NewsLetter from "./component/admin/NewsLetter"
import Setting from "./component/admin/Setting"
import NotFound from "./component/NotFound"
import CookiesTry from './Cookies/Cookies' 
import Impressium from "./component/Impressium"
import DataPrivacy from "./component/DataPrivacy"
import ListViewProduct from "./component/ListViewProduct"
import FdmListView from "./component/ListViewProduct/FdmListView"
import SlaListView from "./component/ListViewProduct/SlaListView"
import LaserCutterListView from "./component/ListViewProduct/LaserCutterListView"
import ScannarListView from "./component/ListViewProduct/ScannarListView"
import FilamentListView from "./component/ListViewProduct/FilamentListView"
import SearchListView from "./component/ListViewProduct/SearchListView"
import TutorialListView from "./component/ListViewNonProduct/TutorialListView"
import NewsListView from "./component/ListViewNonProduct/NewsListView"
import Review from "./component/Review"
import NewsDetailView from "./component/NonProductDetailView/NewsDetailView"
import TutorialDetailView from "./component/NonProductDetailView/TutorialDetailView"

const App = () => {
    return (

        <BrowserRouter>
            <AuthProvider>
                <CurrentProductProvider>
                    <Routes>
                        <Route element={<Navigationbar />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/ComparisonPage" element={<ComparePage />} />
                            <Route path='/comparision' element={<CompareResult />} />
                            <Route path="/impressium" element={<Impressium/>} />
                            <Route path="/dataprivacy" element={<DataPrivacy/>}/>

                            <Route path="/product" element={<ListViewProduct />} >
                                <Route path="fdm" element={<FdmListView />} />
                                <Route path="filament" element={<FilamentListView />} />
                                <Route path="sla" element={<SlaListView />} />
                                <Route path="scanner" element={<ScannarListView />} />
                                <Route path="cutter" element={<LaserCutterListView />} />
                                <Route path="search" element={<SearchListView />} />
                            </Route>
                            <Route path="/testberichte/:productNameURL/:id" element={<Review />} />

                            <Route path="/ratgaber" element={<TutorialListView />} />
                            <Route path="/ratgaber/:title/:id" element={<TutorialDetailView />} />
                            <Route path="/news" element={<NewsListView />} />
                            <Route path="/news/:title/:id" element={<NewsDetailView />} />

                        </Route>
                        
                        {/* Admin Pannel */}
                        <Route element={ <PrivatePage/>}>
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route path="product" element={<ProductDashboard />} />
                            <Route path="topFive" element={<TopFive/>} />
                            <Route path="news" element={ <News/> } />
                            <Route path="addNews" element={ <AddNews/> } />
                            <Route path="updateNews/:id" element={ <AddNews/> } />
                            <Route path="beginnersGuid" element={ <BeginnersGuid/> } />
                            <Route path="addBeginnersGuid" element={ <AddBeginnersGuid/> } />
                            <Route path="updateBeginnersGuid/:id" element={ <AddBeginnersGuid/> } />
                            <Route path="newsletter" element={ <NewsLetter/> } />
                            <Route path="setting" element={ <Setting/> } />
                            <Route element={<NavigationForAddForm/>}>
                            <Route path="addProduct" element={<AddProduct />} />
                            <Route path="addSpecs/:id" element={<AddSpecs/>}></Route>
                            <Route path="addPurchaseLinks/:id" element={<AddPurchaseLinks/>}/>
                            <Route path="addReview/:id" element={<AddReview/>}/>
                            <Route path="updateproduct/:id" element={<UpdateProduct/>}/>
                            </Route>
                            <Route path="users" element={<UserPage/>}/>
                        </Route>
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </CurrentProductProvider>
            </AuthProvider>
            <CookiesTry/>
        </BrowserRouter >

    )
}
export default App