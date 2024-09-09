import { officeItems } from "./items";
import Card from "./Card";

function Office() {
  return (
    <section id="Office">
      <div className="container-fluid all-sections">
        <h2 className="section-heading">Office</h2>
        <div className="row">
          {officeItems.map((items) => {
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

export default Office;
