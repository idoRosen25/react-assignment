import Product from './Product';
import { products } from '../products';
const Home = () => {
  return (
    <div className="App">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
