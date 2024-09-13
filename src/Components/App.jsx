import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Intro from "./Intro";
import LivingRoom from "./LivingRoom";
import DiningRoom from "./DiningRoom";
import Kitchen from "./Kitchen";
import BedRoom from "./BedRoom";
import Office from "./Office";
import Account from "./Account";
import Cart from "./Cart";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="Living" element={<LivingRoom />} />
          <Route path="Dining" element={<DiningRoom />} />
          <Route path="Kitchen" element={<Kitchen />} />
          <Route path="BedRoom" element={<BedRoom />} />
          <Route path="Office" element={<Office />} />
          <Route path="Account" element={<Account />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
