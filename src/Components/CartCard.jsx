function CartCard(props) {
  return (
    <div>
      <img src={props.imgURL} alt="" />
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button>remove cart item</button>
    </div>
  );
}

export default CartCard;
