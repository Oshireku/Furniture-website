import { kitchenItems } from "./items";
import Card from "./Card";

function Kitchen() {
  return (
    <section id="Kitchen">
      <div className="container-fluid all-sections">
        <h2 className="section-heading">Kitchen</h2>
        <div className="row">
          {kitchenItems.map((items) => {
            return (
              <Card
                key={items.id}
                imgURL={items.imgURL}
                description={items.description}
                price={items.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Kitchen;
