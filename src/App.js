import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./component/LoginPage"
import PrivatePage from "./component/PrivatePage"
import Dashboard from "./component/Dashboard"
import ProductDashboard from "./component/ProductDashBoard"
import AddProduct from "./component/AddProduct"
import "./style.css"


const App=()=>{
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<PrivatePage/>}>
                    <Route element={<Dashboard/>}>
                        <Route path="product" element={<ProductDashboard/>}/>
                        <Route path="topFive" element={<h1>TopFive</h1>}/>
                        <Route path="news" element={<h1>News</h1>}/>
                        <Route path="analytics" element={<h1>Google Analytics</h1>}/>
                        <Route path="addProduct" element={<AddProduct/>}/>
                        </Route>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<p>404 Page not found</p>}></Route>
            </Routes>
        
        </BrowserRouter>

    )
}
export default App