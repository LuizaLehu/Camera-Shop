import BasketList from '../../components/basket-list/basket-list';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import PromoCodeForm from '../../components/promo-code-form/promo-code-form';
import { useAppSelector } from '../../hooks';
import { getBasketProducts } from '../../store/data-process/data-process.selectors';

function BasketPage() {

  const basketProducts = useAppSelector(getBasketProducts);

  return (

    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs productName="Main Page" isProductPage={false} />
          <section className="basket">
            <div className="container">
              <h1 className="title title--h2">Корзина</h1>
              <BasketList basketProducts={basketProducts} />
              <div className="basket__summary">
                <div className="basket__promo">
                  <p className="title title--h4">
                    Если у вас есть промокод на скидку, примените его в этом поле
                  </p>
                  <PromoCodeForm />
                </div>
                <div className="basket__summary-order">
                  <p className="basket__summary-item">
                    <span className="basket__summary-text">Всего:</span>
                    <span className="basket__summary-value">111 390 ₽</span>
                  </p>
                  <p className="basket__summary-item">
                    <span className="basket__summary-text">Скидка:</span>
                    <span className="basket__summary-value basket__summary-value--bonus">
                      0 ₽
                    </span>
                  </p>
                  <p className="basket__summary-item">
                    <span className="basket__summary-text basket__summary-text--total">
                      К оплате:
                    </span>
                    <span className="basket__summary-value basket__summary-value--total">
                      111 390 ₽
                    </span>
                  </p>
                  <button className="btn btn--purple" type="submit">
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default BasketPage;
