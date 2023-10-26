function ProductTabs({ activeTab, handleTabClick }) {
  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button
          className="tabs__control"
          type="button"
          onClick={() => handleTabClick('characteristics')}
        >
          Характеристики
        </button>
        <button
          className={`tabs__control ${activeTab === 'description' ? 'is-active' : ''}`}
          type="button"
          onClick={() => handleTabClick('description')}
        >
          Описание
        </button>
      </div>
    </div>
  );
}

export default ProductTabs;
