import { Plus } from "lucide-react"
import all_products from "../assets/all_products"

const Products = () => {
    return (
        <div className='flex flex-wrap gap-10 px-5 md:px-72 py-20'>
            {all_products.map((product) => (
                <div>
                    <div className='relative bg-blue-200 w-[300px] h-[350px] '>
                        <img src={product.image} alt="" />
                        <div>
                            <h3></h3>
                        </div>
                        <div className='absolute bottom-2 bg-orange-200 w-[300px] h-[50px]'>
                            <div className='text-slate-600 flex justify-between items-center px-5 py-3'>
                                <p>{product.name}</p>
                                <div> 
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        </div>
                            <Plus className="absolute top-2 right-2 cursor-pointer p-2 bg-white w-10 h-10 flex items-center justify-center rounded-full" size={16} strokeWidth={2} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products