import { useState, useEffect } from 'react';
import SimilarProductsList from '../similar-product-list/similar-product-list'; // Adjust the import path as needed
import { TProduct } from '../../types/products';

function SimilarProductsSlider({ products }: { products: TProduct[] }) {
  const productsPerPage = 3; // Number of products to show per slide
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages based on the products and productsPerPage
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
    <div className="similar-products-slider">
      <div id="similarProductsSlider" className="similar-products-slider__content">
        <SimilarProductsList products={currentProducts} />
      </div>
      <div className="similar-products-slider__controls">
        {currentPage > 1 && (
          <button
            className="slider-controls slider-controls--prev"
            style={{pointerEvents: 'all'}}
            aria-label="Предыдущий слайд"
            onClick={() => handlePageClick(currentPage - 1)}
            // disabled={currentIndex === 0}
          >
            <svg width={7} height={12} aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
        )}

        {currentPage < totalPages && (
          <button
            className="slider-controls slider-controls--next"
            style={{ pointerEvents: 'all' }}
            aria-label="Следующий слайд"
            onClick={() => handlePageClick(currentPage + 1)}
            //  disabled={currentIndex + similarProductsPerPage >= similarProducts.length}
          >
            <svg width={7} height={12} aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SimilarProductsSlider;