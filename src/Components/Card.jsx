import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useState } from "react";
function Card(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <img className="card-img-top " src={props.imgURL} alt="" />
        <div className="card-body">
          <p className="card-text description-text">{props.description}</p>
          <p>{props.price}</p>
          <button
            className="btn btn-dark description-button"
            onClick={() => {
              handleClick(props.imgURL, props.description, props.price);
            }}
          >
            <AddShoppingCartOutlinedIcon /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
