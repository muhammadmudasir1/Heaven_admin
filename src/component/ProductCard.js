import ProductImage from "../imges/ProductImage.png"
import Star from "../imges/Star.svg"
import halfStar from "../imges/halfStar.svg"

const ProductCard = () => {
    return (
        <div className="flex shadow-sm w-full h-[180px] rounded-lg overflow-hidden mb-4 hover:bg-gray-100 p-2">
            <img src={ProductImage} className="h-full" />
            <div className=" grow h-full px-3 ">
                <div className="flex items-center justify-between h-1/4 w-full">
                    <p className=" font-sans font-bold text-2xl "> Two Trees SK-1 </p>
                    <div>
                        <button className="px-5 hover:text-green-500 ml-2">Edit</button>
                        <button className="px-5 hover:text-red-500 ml-2">Delete</button>
                    </div>

                </div>
                <div className=" h-1/4 w-full flex items-center">
                    <img src={Star} className=" h-8 mr-2" />
                    <img src={Star} className=" h-8 mr-2" />
                    <img src={Star} className=" h-8 mr-2" />
                    <img src={Star} className=" h-8 mr-2" />
                    <img src={halfStar} className=" h-8 mr-2" />


                </div>
                <div className="p-2 h-2/4 w-full ">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor inviduntutlabore
                        et dolore magna
                    </p>
                </div>
            </div>

        </div>
    )
}
export default ProductCard