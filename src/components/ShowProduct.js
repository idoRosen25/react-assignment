import './show.css';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../products';

const ShowProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productById = products.find((product) => product.id === Number(id));

  return (
    <div style={{ paddingTop: '3%' }}>
      <div className="card">
        <button style={{ marginTop: '3%' }} onClick={() => navigate('/')}>
          Go Back
        </button>
        <h1>Product Details: {productById.name}</h1>
        <img
          src={productById.secondImage}
          alt={productById.name}
          width={200}
          height={200}
        />
        <div className="infoContainer">
          <p style={{ marginBottom: '1%' }}>
            <b>Store Name: </b>
            {productById.storeName}
          </p>
          <p style={{ marginBottom: '1%' }}>
            <b>Description:</b>
          </p>
          <p style={{ marginTop: 0 }}>{productById.shortDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
