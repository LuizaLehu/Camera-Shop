import { TProduct } from '../../types/products';
import ProductCard from '../product-card/product-card';
import { useState } from 'react';


type SimilarProductsListProps = {
  products?: TProduct[];
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}


function SimilarProductsList({ products, onMouseEnter, onMouseLeave }: SimilarProductsListProps) {
  const [activeCards] = useState([true, true, true]);


  return (
    <div className="product-similar__slider-list">
      {products?.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isActive={activeCards[index]}
        />
      ))}
    </div>
  );
}

export default SimilarProductsList;

