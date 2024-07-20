import React from 'react'
import Data from '../../../constants'
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_PATH_TO_CATEGORY_DETAILS_PAGE } from '../../../base_paths';
import "../module.css"
import DiscountIcon from '@mui/icons-material/Discount';
import { Rating } from '@mui/material';

const Categories = () => {
    const navigate = useNavigate();
    const params = useParams();
    const CATEGORY = params.category;
    return (
        <div>
            <section className="page-wrapper">
                <div className="categories-title">category {CATEGORY}</div>
                <div className="grid-wrapper">
                    <div className="category-container">
                        {
                            Data[0][CATEGORY].map((category, i) => {
                                return <div className="category-item" onClick={() => { navigate(`${BASE_PATH_TO_CATEGORY_DETAILS_PAGE}/${CATEGORY}/${category.id}`) }}>
                                    <img src={category.thumbnail} alt="mens" />
                                    <div className="discount-flex">
                                        <div className="category-item-type">NEW!</div>
                                        <div className="category-item-type">
                                            <DiscountIcon className="icon" color='success' />
                                            {Math.round(category.discountPercentage)}% OFF
                                        </div>
                                    </div>
                                    <div className="category-item-type">{category.title}</div>
                                    <div className="category-item-type">RS. {category.price}</div>
                                    <div className="rating">
                                        Ratings
                                        <Rating name="half-rating-read" value={category.rating} precision={0.5} readOnly />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories