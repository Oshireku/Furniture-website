function Home() {
  return (
    <section id="Home">
      <div className="container-fluid">
        <h1 className="section-heading">Shop with us today!</h1>
        <div className="home-row">
          <img
            className="home-image"
            src={"../public/Tiny Office.jpg"}
            alt=""
          />
          <p className="intro-text">
            {" "}
            Welcome to Spektre furnitures – your ultimate destination for
            stylish, high-quality furniture that transforms any space into a
            home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
