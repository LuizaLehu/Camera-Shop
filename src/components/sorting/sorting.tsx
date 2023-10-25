import { useState } from 'react';


/* export const SortProductsType = {
  Price: 'по цене',
  Popular: 'по популярности',
};


type SortingProps = {
  activeSorting: TSorting;
  onChange: (newSorting: TSorting) => void;
  type: TSorting;
  name: string;
};

function Sorting({ activeSorting, onChange, type, name }: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleKeydown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  };

  const handleTypeClick = () => {
    setIsOpened((prevIsOpen) => !prevIsOpen);
  };


  return (
    <div className="catalog__content">
      <div className="catalog-sort">
        <form action="#">
          <div className="catalog-sort__inner">
            <p className="title title--h5">Сортировать:</p>
            <div className="catalog-sort__type">
              <div className="catalog-sort__btn-text">
                <input type="radio" id="sortPrice" name="sort" defaultChecked />
                <label htmlFor="sortPrice">по цене</label>
              </div>
              <div className="catalog-sort__btn-text">
                <input type="radio" id="sortPopular" name="sort" />
                <label htmlFor="sortPopular">по популярности</label>
              </div>
            </div>
            <div className="catalog-sort__order">
              <div className="catalog-sort__btn catalog-sort__btn--up">
                <input
                  type="radio"
                  id="up"
                  name="sort-icon"
                  defaultChecked
                  aria-label="По возрастанию"
                />
                <label htmlFor="up">
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort" />
                  </svg>
                </label>
              </div>
              <div className="catalog-sort__btn catalog-sort__btn--down">
                <input
                  type="radio"
                  id="down"
                  name="sort-icon"
                  aria-label="По убыванию"
                />
                <label htmlFor="down">
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


  );
}


export default Sorting;
*/

/*

type SortingProps = {
  activeSorting: string; // Active sorting type, 'price' or 'popular'
  onChange: (newSorting: string) => void; // Callback function to update sorting
};

function Sorting({ activeSorting, onChange }: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortItemClick = (newSorting: string) => {
    onChange(newSorting);
    setIsOpened(false);
  };

  return (
    <div className="catalog__content">
      <div className="catalog-sort">
        <form action="#">
          <div className="catalog-sort__inner">
            <p className="title title--h5">Сортировать:</p>
            <div className="catalog-sort__type">
              <div className="catalog-sort__btn-text">
                <input
                  type="radio"
                  id="sortPrice"
                  name="sort"
                  defaultChecked={activeSorting === 'price'}
                  onChange={() => handleSortItemClick('price')}
                />
                <label htmlFor="sortPrice">по цене</label>
              </div>
              <div className="catalog-sort__btn-text">
                <input
                  type="radio"
                  id="sortPopular"
                  name="sort"
                  defaultChecked={activeSorting === 'popular'}
                  onChange={() => handleSortItemClick('popular')}
                />
                <label htmlFor="sortPopular">по популярности</label>
              </div>
            </div>
            <div className="catalog-sort__order">
              <div className="catalog-sort__btn catalog-sort__btn--up">
                <input
                  type="radio"
                  id="up"
                  name="sort-icon"
                  defaultChecked
                  aria-label="По возрастанию"
                />
                <label htmlFor="up">
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort" />
                  </svg>
                </label>
              </div>
              <div className="catalog-sort__btn catalog-sort__btn--down">
                <input
                  type="radio"
                  id="down"
                  name="sort-icon"
                  aria-label="По убыванию"
                />
                <label htmlFor="down">
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sorting;
*/


type SortingProps = {
  activeSorting: string; // Active sorting type, 'price' or 'popular'
  onChange: (newSorting: string) => void; // Callback function to update sorting
};

function Sorting({ activeSorting, onChange }: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [priceSortOrder, setPriceSortOrder] = useState('asc'); // 'asc' or 'desc' for price sorting
  const [popularSortOrder, setPopularSortOrder] = useState('asc'); // 'asc' or 'desc' for popularity sorting

  const handleSortItemClick = (newSorting: string, newSortOrder: string) => {
    if (newSorting === 'price') {
      setPriceSortOrder(newSortOrder);
    } else if (newSorting === 'popular') {
      setPopularSortOrder(newSortOrder);
    }
    onChange(newSorting);
    setIsOpened(false);
  };

  return (
    <div className="catalog__content">
      <div className="catalog-sort">
        <form action="#">
          <div className="catalog-sort__inner">
            <p className="title title--h5">Сортировать:</p>
            <div className="catalog-sort__type">
              <div className="catalog-sort__btn-text">
                <input
                  type="radio"
                  id="sortPrice"
                  name="sort"
                  defaultChecked={activeSorting === 'price'}
                  onChange={() => handleSortItemClick('price', priceSortOrder)}
                />
                <label htmlFor="sortPrice">по цене</label>
              </div>
              <div className="catalog-sort__btn-text">
                <input
                  type="radio"
                  id="sortPopular"
                  name="sort"
                  defaultChecked={activeSorting === 'popular'}
                  onChange={() => handleSortItemClick('popular', popularSortOrder)}
                />
                <label htmlFor="sortPopular">по популярности</label>
              </div>
            </div>
            <div className="catalog-sort__order">
              <div className="catalog-sort__btn catalog-sort__btn--up">
                <input
                  type="radio"
                  id="up"
                  name="sort-icon"
                  defaultChecked={priceSortOrder === 'asc'}
                  onChange={() => handleSortItemClick(activeSorting, 'asc')}
                />
                <label htmlFor="up">
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort" />
                  </svg>
                </label>
              </div>
              <div className="catalog-sort__btn catalog-sort__btn--down">
                <input
                  type="radio"
                  id="down"
                  name="sort-icon"
                  defaultChecked={priceSortOrder === 'desc'}
                  onChange={() => handleSortItemClick(activeSorting, 'desc')}
                />
                <label htmlFor="down">
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sorting;
