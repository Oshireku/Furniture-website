import Intro from "./Intro";
import LivingRoom from "./LivingRoom";
import DiningRoom from "./DiningRoom";
import Kitchen from "./Kitchen";
import BedRoom from "./BedRoom";
import Office from "./Office";
import Account from "./Account";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "Living",
    element: <LivingRoom />,
  },
  {
    path: "Dining",
    element: <DiningRoom />,
  },
  {
    path: "Kitchen",
    element: <Kitchen />,
  },
  {
    path: "BedRoom",
    element: <BedRoom />,
  },
  {
    path: "Office",
    element: <Office />,
  },

  {
    path: "Account",
    element: <Account />,
  },
  {
    path: "Cart",
    element: <Cart />,
  },
];

export default routes;
