import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TFullProduct } from '../../types/products';


type TabsProp = {
  currentProduct: TFullProduct;
}


function ProductTabs({ currentProduct }: TabsProp): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTabIndex = searchParams.get('activeTabIndex') ?? 1;
  const [activeTab, setActiveTab] = useState(currentTabIndex);

  const updateTab = (index: number) => {
    searchParams.set('activeTabIndex', String(index));
    setSearchParams(searchParams);
    setActiveTab(index);
  };


  useEffect(() => {
    // Update the active tab based on the current URL
    updateTab(+currentTabIndex);
  }, []);

  const { vendorCode, type, level, description, category } = currentProduct;

  /* const handleTabClick = (tabIndex: number) => {
     setActiveTab(tabIndex);
   };

   const isCharacteristicsTabActive = currentUrl.includes('characteristics');
   const isDescriptionTabActive = currentUrl.includes('description');
 */

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button
          className={`tabs__control ${activeTab === 1 ? 'is-active' : ''}`}
          type="button"
          onClick={() => {
            updateTab(1);
          }}
        >
          Характеристики
        </button>
        <button
          className={`tabs__control ${activeTab === 2 ? 'is-active' : ''}`}
          type="button"
          onClick={() => {
            updateTab(2);
          }}
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

