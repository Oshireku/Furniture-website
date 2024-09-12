import livingRoomItems from "./items";
import Card from "./Card";

function LivingRoom() {
  return (
    <section id="Living">
      <div className="container-fluid all-sections">
        <h2 className="section-heading">Living Room</h2>
        <div className="row">
          {livingRoomItems.map((items, index) => {
            return (
              <Card
                key={items.id}
                id={index}
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

export default LivingRoom;
