import { bedRoomItems } from "./items";
import Card from "./Card";

function BedRoom() {
  return (
    <section id="Bedroom">
      <div className="container-fluid all-sections">
        <h2 className="section-heading">Bed Room</h2>
        <div className="row">
          {bedRoomItems.map((items) => {
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

export default BedRoom;
