import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TProduct } from '../../types/products';

type TProps = {
  products: TProduct[];
  displayedPage: number;
};

function Pagination({ products, displayedPage }: TProps) {
  const totalPages = Math.floor(products.length / 9);
  const [currentPage, setCurrentPage] = useState(displayedPage);

  const displayedPages = [];

  // fill in displayedPages with the list of pages to be displayed where there can be only 3 numberd pages + back and forrward

  if (currentPage === 1) {
    displayedPages.push(currentPage, currentPage + 1, currentPage + 2);
  } else if (currentPage === totalPages) {
    displayedPages.push(currentPage - 2, currentPage - 1, currentPage);
  } else {
    displayedPages.push(currentPage - 1, currentPage, currentPage + 1);
  }

  const showNextPage = currentPage < totalPages;
  const showPreviousPage = currentPage > 1;

  useEffect(() => {
    setCurrentPage(displayedPage);

  }, [displayedPage]);

  // Handle page navigation
  const handlePageClick = (item: number) => {

    setCurrentPage(item);
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {showPreviousPage && (
          <li className="pagination__item">
            <Link className="pagination__link" to={`?page=${currentPage - 1}`}>
              Previous
            </Link>
          </li>
        )}
        { displayedPages.map((page) => (
          <li key={page} className={'pagination__item'}>
            {page === currentPage ? (
              <span className="pagination__link pagination__link--active">{page}</span>
            ) : (
              <Link
                className="pagination__link"
                to={`?page=${page}`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
        {showNextPage && (
          <li className="pagination__item">
            <Link className="pagination__link" to={`?page=${currentPage + 1}`}>
              Next
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
export default Pagination;
