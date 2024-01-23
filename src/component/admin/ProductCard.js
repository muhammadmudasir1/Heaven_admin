import ProductImage from "../../imges/ProductImage.png"
import Star from "../../imges/Star.svg"
import halfStar from "../../imges/halfStar.svg"
import GrayStar from "../../imges/grayStar.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const ProductCard = ({data}) => {
    const [yellowStar,setYellowStar]=useState()
    const [grayStar,setGrayStar]=useState()

    useEffect(()=>{
        setYellowStar(Array.from({ length: data.overall_rating }, (_, index) => index + 1))
        setGrayStar(Array.from({ length: 5-data.overall_rating }, (_, index) => index + 1))
    },[data])
    useEffect(()=>{
        console.log(yellowStar)
    },[yellowStar])


    const navigate=useNavigate()
    return (
        <div className="flex shadow-sm w-full h-[180px] rounded-lg overflow-hidden mb-4 hover:bg-gray-100 p-2">
            <div className="bg-cover bg-center  w-[320px] h-full border-2 rounded-md"
            style={{ backgroundImage: `url(/${data.ProductImages[0].path})` }}></div>
            <div className=" grow h-full px-3 ">
                <div className="flex items-center justify-between h-1/4 w-full">
                    <p className=" font-sans font-bold text-2xl ">{data.product_name}</p>
                    <div>
                        <button className="px-5 hover:text-green-500 ml-2"
                        onClick={(e)=>{
                            navigate(`/dashboard/updateproduct/${data.Id}`)
                        }}
                        >Edit</button>
                        <button className="px-5 hover:text-red-500 ml-2">Delete</button>
                    </div>

                </div>
                <div className=" h-1/4 w-full flex items-center">
                    {
                        yellowStar&& yellowStar.map((ele,index)=>{
                            return <img src={Star} key={index} className=" h-8 mr-2" />
                        })
                    }
                    {
                        grayStar&& grayStar.map((ele,index)=>{
                            return <img src={GrayStar} key={index} className=" h-8 mr-2" />
                        })
                    }


                </div>
                <div className="p-2 h-2/4 w-full ">
                    <p>
                        {data.discription}
                    </p>
                </div>
            </div>

        </div>
    )
}
export default ProductCard