function CartCard() {
  return (
    <div>
      <img src={props.imgURL} alt="" />
      <p>{props.description}</p>
      <p>{Props.price}</p>
      <button>remove cart item</button>
    </div>
  );
}

export default CartCard;
