import { useContext,createContext,useState } from "react";

const CurrentProductContext=createContext()

const CurrentProductProvider=({children})=>{
    const [productId,setProductId]=useState(null)
    
    const populateProduct=(id)=>{
        setProductId(id)
    }

    const clearCurrentProduct=()=>{
        setProductId('')
    }
    const value={
        populateProduct,
        clearCurrentProduct
    }

    return <CurrentProductContext.Provider value={value}> {children} </CurrentProductContext.Provider>
}

export const useProductContext=()=>{
    const {populateProduct,clearCurrentProduct}= useContext(CurrentProductContext)
    return {populateProduct,clearCurrentProduct}
}

export default CurrentProductProvider