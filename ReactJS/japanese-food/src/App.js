import "./App.css";
import Booking from "./component/Booking";
import Food from "./component/Food";
import JapFoodMenu from "./component/JapFoodMenu";

function App() {
  return (
    <>
      <JapFoodMenu
        home="Home"
        aboutUs="About Us"
        menu="Our Menu"
        contactUs="Contact Us"
      />
      <Food />
      <Booking />
    </>
  );
}

export default App;
