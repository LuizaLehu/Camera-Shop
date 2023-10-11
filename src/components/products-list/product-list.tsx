import { TProduct } from '../../types/products';
import ProductCard from '../product-card/product-card';


type ProductsListProps = {
  products?: TProduct[];
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}


function ProductsList({ products, onMouseEnter, onMouseLeave }: ProductsListProps) {

  return (
    <div className="cards catalog__cards">
      {products.map((product) => (
        <ProductCard
          key={item.id}
          product={item}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}

    </div>
  );
}

export default ProductsList;

