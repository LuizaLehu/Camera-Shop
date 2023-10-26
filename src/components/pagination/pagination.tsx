//import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TProduct } from '../../types/products';

// Dispatch state type from react
//import { Dispatch } from 'react';


type TProps = {
  products: TProduct[];
  page: number;
};

function Pagination({ products, page }: TProps) {
  const [currentPage, setCurrentPage] = useState(page);
  const totalPages = 6; // Replace with the actual number of pages

  const displayPages = [];
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      displayPages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 3; i++) {
        displayPages.push(i);
      }
      displayPages.push('Далее');
    } else if (currentPage <= totalPages - 3) {
      displayPages.push('Назад');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        displayPages.push(i);
      }
      displayPages.push('Далее');
    } else {
      displayPages.push('Назад');
      for (let i = totalPages - 2; i <= totalPages; i++) {
        displayPages.push(i);
      }
    }
  }

  // Handle page navigation
  const handlePageClick = (page) => {
    if (page === 'Далее' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (page === 'Назад' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (typeof page === 'number') {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {displayPages.map((page, index) => (
          <li key={index} className={'pagination__item'}>
            {page === currentPage ? (
              <span className="pagination__link pagination__link--active">{page}</span>
            ) : (
              <a
                className="pagination__link"
                href={`?page=${page}`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Pagination;
