import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import "./shop.css";

export const Shop = () => {
    return ( // define html structure of shop page
        <div className="shop">
            <div className="shopTitle"> {/* shop header title */}
                <h1>Dylan's Dream Shop</h1>
            </div>
            <div className="products">  {/* portion of page to display products */}
                {" "} {/* construct loop to iterate over product items */}
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
};