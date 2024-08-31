import "./App.css";
import Booking from "./component/Booking";
import Food from "./component/Food";
import JapFoodMenu from "./component/JapFoodMenu";
import BorderImage from "./component/BorderImage";
import NumberBox from "./component/NumberBox";
import AlertBox from "./component/AlertBox";
import Form from "./component/Form";
import ContactUs from "./component/ContactUs";
import React from "react";
import doggo from "./data/doggo.jpg";

function App() {
  // Lab 3, 4
  function DisplayMessage(props) {
    return `Goodbye, ${props.name}!`;
  }

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
      <div>
        <h1>Japanese Food</h1>
        <p>
          Japanese cuisine encompasses the regional and traditional foods of
          Japan, which have developed through centuries of social and economic
          changes. The traditional cuisine of Japan is based on rice with miso
          soup and other dishes; there is an emphasis on seasonal ingredients.
          Side dishes often consist of fish, pickled vegetables, and vegetables
          cooked in broth. Seafood is common, often grilled, but also served raw
          as sashimi or in sushi. Seafood and vegetables are also deep-fried in
          a light batter as tempura.
        </p>
      </div>

      {/* Lab 3 */}
      <DisplayMessage name="John" />

      <h1>HANDS ON 3.1: CUSTOMIZED IMAGE</h1>
      <BorderImage image={doggo} />
      <br />

      {/* Lab 4 */}
      <h1>Using Class Based Components with States</h1>
      <NumberBox initialValue={10} />
      <br />

      <h1>HANDS ON 4.1 - ALERT BOX</h1>
      <AlertBox />

      <br />
      <h1>React Lab 6 - Form Handling</h1>
      {/* Lab 6 */}
      <Form />
      <br />
      <h1>React Lab 6 Practise - Contact Us</h1>
      <ContactUs />
    </>
  );
}

export default App;
