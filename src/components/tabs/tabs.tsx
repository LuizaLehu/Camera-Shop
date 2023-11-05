import { useState } from 'react';
import { TProduct, TFullProduct } from '../../types/products';


type TabsProp = {
  product: TProduct | TFullProduct;
}

function ProductTabs({ product }: TabsProp): JSX.Element {
  const [activeTab, setActiveTab] = useState(1);

  const {vendorCode, type, level, description, category } = product;

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button
          className={`tabs__control ${activeTab === 1 ? 'is-active' : ''}`}
          type="button"
          onClick={() => handleTabClick(1)}
        >
          Характеристики
        </button>
        <button
          className={`tabs__control ${activeTab === 2 ? 'is-active' : ''}`}
          type="button"
          onClick={() => handleTabClick(2)}
        >
          Описание
        </button>
      </div>
      <div className="tabs__content">
        <div className={`tabs__element ${activeTab === 1 ? 'is-active' : ''}`}>
          <ul className="product__tabs-list">
            <li className="item-list">
              <span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{vendorCode}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Категория:</span>
              <p className="item-list__text">{category}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{type}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{level}</p>
            </li>
          </ul>
        </div>
        <div className={`tabs__element ${activeTab === 2 ? 'is-active' : ''}`}>
          <div className="product__tabs-text">
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;
