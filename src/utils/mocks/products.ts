/*import { name, random, datatype, commerce, system } from 'faker';
import { TProduct } from '../../types/products';

const makeFakeProducts = (): TProduct[] => new Array(5).fill(null).map(
  () => ({
    id: datatype.uuid(),
    name: name.findName(),
    vendorCode: datatype.uuid(),
    type: random.word(),
    category: random.word(),
    description: commerce.productDescription(),
    level: random.word(),
    price: +commerce.price(),
    rating: datatype.number({ min: 1, max: 5 }),
    reviewCount: datatype.number(20),
    previewImg: system.filePath(),
  })
);

export { makeFakeProducts };
*/
