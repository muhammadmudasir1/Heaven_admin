import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./component/LoginPage"
import PrivatePage from "./component/PrivatePage"
import "./style.css"


const App=()=>{
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivatePage/>}>
                    <Route path="/dashboard" element={<h1 className=" bg-orange-300">dashboard</h1>}/>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        
        </BrowserRouter>

    )
}
export default App