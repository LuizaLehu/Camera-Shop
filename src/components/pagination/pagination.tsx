

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {pages.map((page) => (
          <li
            key={page}
            className={`pagination__item ${page === currentPage ? 'pagination__item--active' : ''
              }`}
          >

            <a
              className="pagination__link"
              href={`/page${page}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="pagination__item">
          <a
            className="pagination__link pagination__link--text"
            href={`/page${currentPage + 1}`}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Далее
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
