function Pagination() {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <a
            className="pagination__link pagination__link--active"
            href="/page1"
          >
            1
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="/page2">
            2
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="/page3">
            3
          </a>
        </li>
        <li className="pagination__item">
          <a
            className="pagination__link pagination__link--text"
            href="/page2"
          >
            Далее
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
