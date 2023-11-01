import { name, random, datatype, commerce, system } from 'faker';

const makeFakeProduct = () => {
  const product = {
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
    previewImg2x: system.filePath(),
    previewImgWebp: system.filePath(),
    previewImgWebp2x: system.filePath(),
  };

  return product;
};

export { makeFakeProduct };
