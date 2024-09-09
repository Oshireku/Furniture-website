import { diningItems } from "./items";
import Card from "./Card";

function DiningRoom() {
  return (
    <section id="Dining">
      <div className="container-fluid all-sections">
        <h2 className="section-heading">Dining Room</h2>
        <div className="row">
          {diningItems.map((items) => {
            return (
              <Card
                key={diningItems.id}
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

export default DiningRoom;
