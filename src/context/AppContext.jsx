import { createContext, useState } from 'react';
import all_products from '../assets/all_products';
import toast from 'react-hot-toast';

// 1- create context 
export const AppContext = createContext(null)


// cart default value 
const defaultData = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }

    return cart;
}

const AppContextProvider = ({ children }) => {
    // all functions 
    const [cart, setCartItems] = useState(defaultData());

    // add product  
    const AddProduct = (id) => {
        setCartItems((prevItem) => (
            {
                ...prevItem,
                [id]: prevItem[id] + 1
            }
        ))
        toast.success("Product Added Successfully")
    }

    // remove product 
    const removeProduct = (id) => {
        setCartItems((prevItem) => (
            {
                ...prevItem,
                [id]: prevItem[id] - 1
            }
        ))
        toast.success("Product Removed Successfully")
    }

    // total products added to cart 
    const totalCart = () => {
        let total = 0;
        for(const item in cart) {
            if(cart[item] > 0) {
                total += cart[item]
            }
        }

        return total;
    }

    const cartTotal = totalCart()

    console.log(cart)

    return <AppContext.Provider value={{ cart, setCartItems, all_products, AddProduct, removeProduct, cartTotal }}>{children}</AppContext.Provider>

}

export default AppContextProvider;

// AppContextProvider > children(app)