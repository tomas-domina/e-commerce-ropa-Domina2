import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/cartContext";

const ItemDetail = ({ producto }) => {
  const { nombre, precio, pictureUrl, stock, description } = producto;

  const { cart, addToCart } = useCartContext();

  const onAdd = (cant) => {
    console.log(`Se agregaron ${cant} productos`);
    addToCart({ ...producto, cantidad: cant });
  };

  console.log(cart);

  return (
    <div className="container-fluid item-detail-box">
      <div className="card">
        <img className="card-img-top img-detail" src={pictureUrl} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">${precio}</p>
          <div className="counting">
            <ItemCount stock={stock} initial={1} onAdd={onAdd}>
              {stock}
            </ItemCount>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
