import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/customer/LoginPage';
import ProductPage from './pages/customer/ProductPage';
import ForgotPassword from './pages/customer/ForgotPassword';
import SignUpPage from './pages/customer/SignUpPage';
import OrdersPage from './pages/customer/OrdersPage';
import AccountPage from './pages/customer/AccountPage';
import VHomePage from './pages/vendor/VHomePage';
import VManageProducts from './pages/vendor/VManageProducts';
import VManageStore from './pages/vendor/VManageStore';
import VAddProductPage from './pages/vendor/VAddProductPage';
import HomePage from './pages/customer/HomePage';
import AllProducts from './components/AllProducts';
import ProductContext from './context/ProductsContext';
import { useState } from 'react';
import { ProductListData } from './utils/data';


function App() {

  const [productList, setProductList] = useState(ProductListData)
<<<<<<< Updated upstream
=======

  const [user, setUser] = useState({});
>>>>>>> Stashed changes

  return (
    <BrowserRouter>
      <ProductContext.Provider value={{ productList, setProductList }} >
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

<<<<<<< Updated upstream
          {/* Producted Routes - Authenticated Only */}
          <Route path='/' element={<HomePage />}>
            <Route index element={<AllProducts />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/account' element={<AccountPage />} />
          </Route>
=======

      <AuthContext.Provider value={{ user, setUser }}>
        <ProductContext.Provider value={{ productList, setProductList }} >
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />

            {/* Producted Routes - Authenticated Only */}
            <Route path='/' element={<HomePage />}>
              <Route index element={<AllProducts />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/orders' element={<OrdersPage />} />
              <Route path='/account' element={<AccountPage />} />
            </Route>
>>>>>>> Stashed changes


          {/* Vendor Only Routes - Authentication Required */}

          <Route path='/vendor/home' element={<VHomePage />} />
          <Route path='/vendor/manage-products' element={<VManageProducts />} />
          <Route path='/vendor/add-product' element={<VAddProductPage />} />


          <Route path='/vendor/manage-store' element={<VManageStore />} />
          {/* END - Producted Routes - Authenticated Only */}

        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
