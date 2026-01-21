import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <> 
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* auth pages  */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* shop pages  */}
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/product/:name" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        {/* not found  */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}
