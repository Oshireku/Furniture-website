import CartCard from "./CartCard";
function Cart() {
  return (
    <section id="Cart">
      <div className="container-fluid all-sections">
        <h2 className="section-heading">Shopping Cart</h2>
      </div>
      <ul>
        <li>
          {cartArray.map(() => {
            return <CartCard />;
          })}
        </li>
      </ul>
    </section>
  );
}

export default Cart;
