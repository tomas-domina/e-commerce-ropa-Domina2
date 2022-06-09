import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const { nombre, categoria, precio, pictureUrl, stock } = producto;

  return (
    <div className="container-fluid item-detail-box">
      <div className="card">
        <img className="card-img-top img-detail" src={pictureUrl} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{categoria}</p>
          <p className="card-text">${precio}</p>
          <ItemCount stock={stock} initial={1}>
            {stock}
          </ItemCount>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
