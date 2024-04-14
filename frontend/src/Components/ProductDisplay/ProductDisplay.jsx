import React, { useContext } from 'react';
import './ProductDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import Item from '../Item/Item';

const ProductDisplay = ({ category }) => {
    const { product_list } = useContext(StoreContext);

    return (
        <div className='product_display'>
            <h2>Varieties of products for you.</h2>
            <div className="display-list">
                {product_list && product_list.map((item) => (
                    <Item key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                ))}
            </div>
        </div>
    );
};

export default ProductDisplay;