/* import Filter from '../filter/filter';

function FilterProductList(): JSX.Element {

  const [products, setProducts] = useState([]);

  // Function to fetch product data (you should replace this with actual data fetching)
  const fetchProducts = async () => {
    // Fetch product data and set it using setProducts
    const data = await fetch('your-api-endpoint-here');
    const products = await data.json();
    setProducts(products);
  };

  // Call the fetchProducts function when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Filter />
      <div className="catalog">

        {products.map((product) => (
          <div key={product.id} className="product">

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
*/
