import { useState, useEffect } from 'react';
import SimilarProductsList from '../similar-product-list/similar-product-list';
import { TProduct } from '../../types/products';

function SimilarProductsSlider({ products }: { products: TProduct[] }) {
  const productsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (page: number) => {

    setCurrentPage(page);
  };

  useEffect(() => {
    // Scroll to the beginning of the slider whenever the page changes
    const sliderElement = document.getElementById('similarProductsSlider'); // Add an ID to the slider element
    if (sliderElement) {
      sliderElement.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  // Calculate the range of products to display on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="product-similar__slider">
      <div className="product-similar__slider-list">
        <SimilarProductsList products={currentProducts} />
      </div>
      <div className="similar-products-slider__controls">
        <button
          className="slider-controls slider-controls--prev"
          style={{ pointerEvents: currentPage > 1 ? 'all' : 'none' }}
          aria-label="Предыдущий слайд"
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>

        <button
          className="slider-controls slider-controls--next"
          style={{ pointerEvents: currentPage < totalPages ? 'all' : 'none' }}
          aria-label="Следующий слайд"
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SimilarProductsSlider;
