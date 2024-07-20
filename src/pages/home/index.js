import React from 'react';
import './module.css';
import Data from '../../constants';
import SwiperComponent from '../../components/swiper';
import { useNavigate } from 'react-router-dom';
import { BASE_PATH_TO_CATEGORIES_PAGE } from '../../base_paths';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <SwiperComponent />

            <section className='collection-container'>
                <h1>
                    <span> FIGMA'S <img src="//store.figma.com/cdn/shop/t/20/assets/word-symbol-burst.static.svg?v=34745811441670751621718321267" aria-hidden="true" class="word-icon" alt='demo' /> COLLECTION <img src="//store.figma.com/cdn/shop/t/20/assets/word-symbol-hourglass.static.svg?v=133626873782927219541718321267" aria-hidden="true" class="word-icon" alt='icon' /> OF
                    </span> <u>LAYERS</u> <span><img src="//store.figma.com/cdn/shop/t/20/assets/word-symbol-zag.static.svg?v=102718930007740203771718321267" aria-hidden="true" class="word-icon" alt='icon' /> AND  <img src="//store.figma.com/cdn/shop/t/20/assets/word-symbol-dots.static.svg?v=39142388321885661271718321267" aria-hidden="true" class="word-icon" alt='icon' /></span> <u>COMPONENTS</u> <span><img src="//store.figma.com/cdn/shop/t/20/assets/word-symbol-sun.static.svg?v=163357932534391307201718321267" aria-hidden="true" class="word-icon" alt='icon' /> FOR YOU <img src="//store.figma.com/cdn/shop/t/20/assets/word-symbol-comet.static.svg?v=16892712658856357451718321267" aria-hidden="true" class="word-icon" alt='icon' /> AND <img src="//store.figma.com/cdn/shop/t/20/assets/word-symbol-snake.static.svg?v=34100567131936571961718321267" aria-hidden="true" class="word-icon" alt='icon' /> YOUR <img src="//store.figma.com/cdn/shop/t/20/assets/word-symbol-tri.static.svg?v=32742515804419710851718321267" aria-hidden="true" class="word-icon" alt='icon' /> FRIENDS</span>
                </h1>
            </section>

            <section className='banner-image'>
                <img src='https://media.licdn.com/dms/image/D4D12AQHX9UYZ4UZcqA/article-inline_image-shrink_1500_2232/0/1713430125023?e=1726099200&v=beta&t=7d2KaE1hfeZh4vtvl87PxxI2iTahxNq-lXUTBS06yNE' alt='banner' />
            </section>

            <section className="page-wrapper">
                <div className="grid-wrapper">
                    <div className="category-container">
                        <div className="category-item" onClick={() => { navigate(`${BASE_PATH_TO_CATEGORIES_PAGE}/womens`) }}>
                            <img src={Data[0].womens[0].thumbnail} alt="Womens" />
                            <div className="category-text">CATEGORY</div>
                            <div className="category-item-type">Womens</div>
                        </div>
                        <div className="category-item" onClick={() => { navigate(`${BASE_PATH_TO_CATEGORIES_PAGE}/accessories`) }}>
                            <img src={Data[0].accessories[0].thumbnail} alt="mens" />
                            <div className="category-text">CATEGORY</div>
                            <div className="category-item-type">Accessories</div>
                        </div>
                        <div className="category-item" onClick={() => { navigate(`${BASE_PATH_TO_CATEGORIES_PAGE}/mens`) }}>
                            <img src={Data[0].mens[0].thumbnail} alt="mens" />
                            <div className="category-text">CATEGORY</div>
                            <div className="category-item-type">Mens</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
