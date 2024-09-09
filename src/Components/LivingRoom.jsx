import livingRoomItems from "./items";
import Card from "./Card";
import NavBar from "./Navbar";

function LivingRoom() {
  return (
    <section id="Living">
      <NavBar />
      <div className="container-fluid all-sections">
        <h2 className="section-heading">Living Room</h2>
        <div className="row">
          {livingRoomItems.map((items) => {
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

export default LivingRoom;
