import { useState } from 'react';

export const Header = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
    }) => {
        const [active, setActive] = useState(false);
        
        const onDeleteProduct = product => {
            const results = allProducts.filter(
                item => item.id !== product.id
            );
    
            setTotal(total - product.price * product.quantity);
            setCountProducts(countProducts - product.quantity);
            setAllProducts(results);
        };
    
        const onCleanCart = () => {
            setAllProducts([]);
            setTotal(0);
            setCountProducts(0);
        };
        return (
            <header>
                <h1>CAFÉ HIMALAYA</h1>
            
                <div className='container-icon'>
                    <div
                        className='container-cart-icon'
                        onClick={() => setActive(!active)}
                    >
                        <img src="https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-carrito-de-compras-6.png" alt="carrito" className="icon-cart" />
                            <div className='count-products'>
                                <span id='contador-productos'>{countProducts}</span>
                            </div>
                    </div>
                    <div
                        className={`container-cart-products ${
                        active ? '' : 'hidden-cart'
                    }`}
                    >
                        {allProducts.length ? (
                            <>
                                <div className='row-product'>
                                    {allProducts.map(product => (
                                        // <div className='cart-product' key={product.id}>
                                        //     <div className='info-cart-product'>
                                        //         <div className='imagen-producto-carrito'>
                                        //         <img src={product.urlImage} alt={product.title} className="icon-product" />
                                        //         </div>
                                        //         <div className='titulo-producto-carrito'>
                                        //             <p>{product.title}</p>
                                        //         </div>
                                        //         <div className='cold'>
                                        //             a
                                        //         </div>
                                        //         </div>
                                        //             <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)}/>
                                        //         </div>

                                        <div className='parent'>
                                            <div class="imagen-producto-carrito"> 
                                                <img src={product.urlImage} alt={product.title} className="icon-product" />
                                            </div>
                                            <div class="titulo-producto-carrito">
                                                <p>{product.title}</p>
                                            </div>
                                            <div class="cantidad-producto-carrito">
                                                ${product.price}
                                            </div>
                                            <div class="precio-producto-carrito">
                                                <form action="#">
                                                    <input type="number" className='contador'/>
                                                </form>
                                            </div>
                                            <div class="delete-producto-carrito">
                                            <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)}/>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                                    <div className='cart-total'>
                                        <h3>Total:</h3>
                                        <span className='total-pagar'>${total}</span>
                                    </div>
                                    <button className='btn-clear-all' onClick={onCleanCart}>Vaciar Carrito</button>
                            </>
                        ) : (
                            <p className='cart-empty'>El carrito está vacío</p>
                        )}
                    </div>
                </div>
        </header>
        );
    };


