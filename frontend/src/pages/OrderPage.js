import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({products}) {
    const results = useState([])
    return(
        <div id="order-container">
            <h2>Orders</h2>
            <article>
                <h3>You can order items from the table below</h3>
                <p>Please select up to 10 of each item.</p>
                <table id="orderTable">
                    <caption>Products</caption>
                    <thead>
                        <tr>
                            <th>Item, company</th>
                            <th>Price</th>
                            <th>Choose Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((currentProduct, index) => 
                        <ProductRow item={currentProduct} key={index}
                        />
                    )}
                    </tbody>
                </table>
            </article>
        </div>
    );
}

export default OrderPage;