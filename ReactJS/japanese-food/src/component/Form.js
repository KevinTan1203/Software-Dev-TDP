import React from "react";

export default class Form extends React.Component {
  state = {
    name: "",
    colour: "",
    country: "",
    fruits: [],
  };

  updateForm = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState((prevState) => {
        const fruits = checked
          ? [...prevState.fruits, value]
          : prevState.fruits.filter((fruit) => fruit !== value);
        return { fruits };
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `
      Name: ${this.state.name}\n
      Colour: ${this.state.colour}\n
      Country: ${this.state.country}\n
      Fruits: ${this.state.fruits.join(", ")}
      `
    );
  };

  render() {
    const isFormValid =
      this.state.name && this.state.colour && this.state.country;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.updateForm}
          />
        </div>
        <div>
          <label>Favourite Colour:</label>
          <input
            name="colour"
            type="radio"
            value="red"
            checked={this.state.colour === "red"}
            onChange={this.updateForm}
          />
          Red
          <input
            name="colour"
            type="radio"
            value="green"
            checked={this.state.colour === "green"}
            onChange={this.updateForm}
          />
          Green
          <input
            name="colour"
            type="radio"
            value="blue"
            checked={this.state.colour === "blue"}
            onChange={this.updateForm}
          />
          Blue
        </div>
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.updateForm}
          >
            <option value="">Select a country</option>
            <option value="singapore">Singapore</option>
            <option value="malaysia">Malaysia</option>
            <option value="indonesia">Indonesia</option>
          </select>
        </div>
        <div>
          <label>Fruits:</label>
          <input
            type="checkbox"
            name="fruits"
            value="apple"
            checked={this.state.fruits.includes("apple")}
            onChange={this.updateForm}
          />
          Apple
          <input
            type="checkbox"
            name="fruits"
            value="orange"
            checked={this.state.fruits.includes("orange")}
            onChange={this.updateForm}
          />
          Orange
          <input
            type="checkbox"
            name="fruits"
            value="banana"
            checked={this.state.fruits.includes("banana")}
            onChange={this.updateForm}
          />
          Banana
          <input
            type="checkbox"
            name="fruits"
            value="grape"
            checked={this.state.fruits.includes("grape")}
            onChange={this.updateForm}
          />
          Grape
        </div>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    );
  }
}
