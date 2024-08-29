import "./App.css";
import Greeting from "./component/Greeting";
import Booking from "./component/Booking";
import Food from "./component/Food";
import Navigation from "./component/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Food />
      <Booking />
    </>
  );
}

export default App;
