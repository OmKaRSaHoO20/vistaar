import React, { useState } from 'react'
import Data from '../../../constants'
import { useNavigate, useParams } from 'react-router-dom';
import "../module.css"
import DiscountIcon from '@mui/icons-material/Discount';
import { Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { BASE_PATH_TO_CONTACTS } from '../../../base_paths';

const CategoryDetails = () => {
    const navigate = useNavigate();
    const params = useParams();

    // Check if the category exists in Data
    const categoryData = Data[0][params.category];

    // Filter the product based on id
    const PRODUCT = categoryData.find((item) => item.id === parseInt(params.id));

    const [selectedImage, setSelectedImage] = useState(PRODUCT.thumbnail);
    const [quantity, setQuantity] = useState(1);
    const [value, setValue] = useState("S");

    if (!PRODUCT) {
        return <div>Product not found</div>;
    }

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div>
            <section className="page-wrapper">
                <div className="grid-wrapper">
                    <div className="category-details-container">
                        <div className="demo-images">
                            {
                                PRODUCT.images.map((image) => {
                                    return (
                                        <div className="demo-image-container" onClick={() => setSelectedImage(image)} key={image}>
                                            <img src={image} alt='data' />
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="thumbnail-image">
                            <img src={selectedImage} alt='data' />
                        </div>
                        <div className="product-details">
                            <div className="discount-flex">
                                <div className="category-chip">
                                    {PRODUCT.category}
                                </div>
                                <div className="category-item-type">
                                    <DiscountIcon className="icon" color='success' />
                                    {Math.round(PRODUCT.discountPercentage)}% OFF
                                </div>
                            </div>
                            <div className="product-title">{PRODUCT.title}</div>
                            <div className="product-size-container">
                                <button
                                    value={"S"}
                                    className="product-size-button"
                                    style={{
                                        backgroundColor: value === "S" && "#000",
                                        color: value === "S" && "white"
                                    }}
                                    onClick={() => {
                                        setValue("S")
                                    }}
                                >
                                    S
                                </button>
                                <button
                                    value={"M"}
                                    className="product-size-button"
                                    style={{
                                        backgroundColor: value === "M" && "#000",
                                        color: value === "M" && "white"
                                    }}
                                    onClick={() => {
                                        setValue("M")
                                    }}
                                >
                                    M
                                </button>
                                <button
                                    value={"L"}
                                    className="product-size-button"
                                    style={{
                                        backgroundColor: value === "L" && "#000",
                                        color: value === "L" && "white"
                                    }}
                                    onClick={() => {
                                        setValue("L")
                                    }}
                                >
                                    L
                                </button>
                                <button
                                    value={"XL"}
                                    className="product-size-button"
                                    style={{
                                        backgroundColor: value === "XL" && "#000",
                                        color: value === "XL" && "white"
                                    }}
                                    onClick={() => {
                                        setValue("XL")
                                    }}
                                >
                                    XL
                                </button>
                                <button
                                    value={"XXL"}
                                    className="product-size-button"
                                    style={{
                                        backgroundColor: value === "XXL" && "#000",
                                        color: value === "XXL" && "white"
                                    }}
                                    onClick={() => {
                                        setValue("XXL")
                                    }}
                                >
                                    XXL
                                </button>
                            </div>

                            <div className="quantity-container">
                                <button disabled={quantity === 0} className={quantity === 0 ? "product-size-btn-disabled" : "product-size-btn"} onClick={handleDecrease}>
                                    <RemoveIcon />
                                </button>
                                <span className="quantity">{quantity}</span>
                                <button className="product-size-btn" onClick={handleIncrease}>
                                    <AddIcon />
                                </button>
                            </div>

                            <div>
                                <button onClick={() => {
                                    navigate(BASE_PATH_TO_CONTACTS)
                                }} disabled={quantity === 0} className={quantity === 0 ? "product-buy-btn-disabled" : "product-buy-btn"}>
                                    BUY @ RS. {PRODUCT.price * quantity}
                                </button>
                            </div>

                            <div className="product-description">{PRODUCT.description}</div>
                            <div className="rating">
                                <Rating name="half-rating-read" value={PRODUCT.rating} precision={0.5} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default CategoryDetails;
