import React, { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
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
              <p className="item-list__text">DA4IU67AD5</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Категория:</span>
              <p className="item-list__text">Видеокамера</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">Коллекционная</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Уровень:</span>
              <p className="item-list__text">Любительский</p>
            </li>
          </ul>
        </div>
        <div className={`tabs__element ${activeTab === 2 ? 'is-active' : ''}`}>
          <div className="product__tabs-text">
            <p>
              Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале
              80-х годов, однако она до сих пор пользуется популярностью среди
              коллекционеров и яростных почитателей старинной техники.
            </p>
            <p>
              Вы тоже можете прикоснуться к волшебству аналоговой съёмки,
              заказав этот чудо-аппарат. Кто знает, может с Das Auge
              IV начнётся ваш путь к наградам всех престижных кинофестивалей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
