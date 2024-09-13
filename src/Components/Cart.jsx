import { bedRoomItems } from "./items";
import CartCard from "./CartCard";
function Cart() {
  return (
    <section id="Cart">
      <div className="container-fluid all-sections">
        <h2 className="section-heading">
          {bedRoomItems.length} items in Shopping Cart
        </h2>
      </div>
      <ul>
        <li>
          {bedRoomItems.map((item) => {
            return (
              <CartCard
                key={item.id}
                imgURL={item.imgURL}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </li>
      </ul>
    </section>
  );
}

export default Cart;
