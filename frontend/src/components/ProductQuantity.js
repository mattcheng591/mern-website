import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1);
    const decrement = () => setQuantity(quantity === 0 ? 0: quantity - 1);
    return (
        <div class="">
            <AiOutlineArrowDown onClick={decrement} size={25} class="bigger"/>
            <span class="quant">{quantity}</span>
            <AiOutlineArrowUp onClick={increment} size={25} class="bigger"/>
        </div>
    );
}

export default ProductQuantity;