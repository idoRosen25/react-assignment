import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, name, image, price } = product;
  const navigate = useNavigate();

  return (
    <div
      className="productRow"
      id={id}
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <div className="rowInfo">
        <p className="infoTitle">
          <b>Title: </b>
          {name}
        </p>
        <p className="infoPrice">
          <b>Price: </b>
          {price} $
        </p>
      </div>
      <img src={image} alt={name} width={200} height={200} />
    </div>
  );
};

export default Product;
