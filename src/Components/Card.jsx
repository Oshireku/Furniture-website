import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
function Card(props) {
  function handleClick() {
    console.log("hello");
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <img className="card-img-top " src={props.imgURL} alt="" />
        <div className="card-body">
          <p className="card-text description-text">{props.description}</p>
          <p>{props.price}</p>
          <button
            onClick={handleClick}
            className="btn btn-dark description-button"
          >
            <AddShoppingCartOutlinedIcon /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
