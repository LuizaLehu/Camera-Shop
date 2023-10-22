import { TProduct } from '../../types/products';
import BasketCard from '../basket-card/basket-card';

type BasketListProps = {
  basketProducts: TProduct[];
}


function BasketList({ basketProducts }: BasketListProps): JSX.Element {
  return (
    <ul className="basket__list">
      {basketProducts.map((product) => (
        <li key={product.id}>
          <BasketCard product={product} />
        </li>
      ))}

    </ul>

  );
}

export default BasketList;

