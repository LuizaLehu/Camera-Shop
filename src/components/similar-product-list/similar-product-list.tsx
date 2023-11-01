import { TProduct } from '../../types/products';
import ProductCard from '../product-card/product-card';


type SimilarProductsListProps = {
  products?: TProduct[];
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}


function SimilarProductsList({ products, onMouseEnter, onMouseLeave }: SimilarProductsListProps) {

  return (
    <div className="product-similar__slider-list">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
}

export default SimilarProductsList;

