import './App.css';
// set up routes, these are the routes you would typically import when working with react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import navigation bar component
import { Navbar } from './components/navbar';
// import shop page component
import { Shop } from "./pages/shop/shop"
import { Cart } from "./pages/cart/cart"
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
      <div className = "App">
      <ShopContextProvider>
        {/* set up router, all routes will exist within the router*/}
        <Router>

        {/* navbar is located above the routes so that it will be present in every route, it should always be up here*/}
          <Navbar /> {/*set up a navigation bar to navigate throughout app and import*/}

          <Routes>  {/* define routes that exist within router */}
            <Route path="/" element={<Shop />} /> {/* route for the shop's main page where you view products, insert path and element page component*/}
            <Route path="/cart" element={<Cart />} /> {/* route for the shopping cart */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
