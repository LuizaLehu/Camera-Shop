import { useState, ChangeEvent } from 'react';


function Filter(): JSX.Element {

  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    photocamera: false,
    videocamera: false,
    digital: true,
    film: false,
    snapshot: false,
    collection: true,
    zero: true,
    nonProfessional: false,
    professional: false,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleReset = () => {
    setFilters({
      priceMin: '',
      priceMax: '',
      photocamera: false,
      videocamera: false,
      digital: true,
      film: false,
      snapshot: false,
      collection: true,
      zero: true,
      nonProfessional: false,
      professional: false,
    });
  };


  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  name="priceMin"
                  value={filters.priceMin}
                  onChange={handleInputChange}
                  placeholder="от"
                />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  name="priceMax"
                  value={filters.priceMax}
                  onChange={handleInputChange}
                  placeholder="до"
                />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                name="photocamera"
                checked={filters.photocamera}
                onChange={handleInputChange}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">
                Фотокамера
              </span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                name="videocamera"
                checked={filters.videocamera}
                onChange={handleInputChange}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">
                Видеокамера
              </span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                name="digital"
                onChange={handleInputChange}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Цифровая</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                name="film"
                checked={filters.film}
                onChange={handleInputChange}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">
                Плёночная
              </span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                name="snapshot"
                onChange={handleInputChange}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">
                Моментальная
              </span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                name="collection"
                onChange={handleInputChange}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">
                Коллекционная
              </span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                name="zero"
                onChange={handleInputChange}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">Нулевой</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="non-professional" />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">
                Любительский
              </span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                type="checkbox"
                name="professional"
                checked={filters.professional}
                onChange={handleInputChange}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">
                Профессиональный
              </span>
            </label>
          </div>
        </fieldset>
        <button
          className="btn catalog-filter__reset-btn"
          type="reset"
          onClick={handleReset}
        >
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
}


export default Filter;
