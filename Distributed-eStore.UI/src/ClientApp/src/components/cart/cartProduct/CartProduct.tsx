﻿import * as React from 'react';
import { ICartProduct } from '../../../state/cart';

export const CartProduct: React.FC<ICartProduct> = ({
    id,
    name,
    price,
    color,
    imageURL
}) => {
    return <div className="cart-product">
        <a className="cart-product__link" href="#">
            <img sizes="100vw" src={imageURL} className="product__image"></img>
            <p className="w-25 cart-product__name"> { name } </p>
            <p className="w-25 cart-product__color"> { color } </p>
            <p className="w-25 cart-product__price"> { price } </p>
        </a>
    </div>
};