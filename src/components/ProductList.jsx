import React from "react";
import {data} from "../data";

export const ProductList= ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProducts = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === products.id
                ? { ...item, quantity: item.quantity + 1}
                :item
            );
            setTotal(total + products.price * products.quantity);
            setCountProducts(countProducts + products.quantity);
            return setAllProducts([...products]);
        }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product])
    };
        return (
            <div className="container-items">
                {data.map(product =>(
                    <div className="item" key={product.id}>
                        <figure>
                            <img src={product.urlImage} alt={product.title}/>
                        </figure>
                        <div className="info-product">
                            <h2>{product.title}</h2>
                            <p className="descrip">{product.descrip}</p>
                            <p className="price">${product.price}</p>
                            <button onClick={() => onAddProducts(product)}>Añadir</button>
                    </div>
                </div>
            ))}
        </div>
        );
};