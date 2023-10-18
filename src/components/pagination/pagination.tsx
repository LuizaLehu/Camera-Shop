import { Link } from 'react-router-dom';
import { useState } from 'react';

function Pagination({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(products.length / recordsPerPage);

  const pageNumbers = Array.from({ length: nPages }, (_, i) => i + 1);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <nav>
        <ul className="pagination__list">
          {pageNumbers.map((n) => (
            <li key={n} className={`pagination__item ${currentPage === n ? 'active' : ''}`}>
              <Link
                className={`pagination__link ${currentPage === n ? 'pagination__link--active' : ''}`}
                to={`/cameras/?page=${n}`}
                onClick={() => changeCurrentPage(n)}
              >
                {n}
              </Link>
            </li>
          ))}

          {currentPage < nPages && (
            <li className="pagination__item">
              <Link
                className="pagination__link pagination__link--text"
                to={`/cameras/?page=${currentPage + 1}`}
                onClick={nextPage}
              >
                Далее
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
