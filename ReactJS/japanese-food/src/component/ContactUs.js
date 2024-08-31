import React from "react";

export default class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    queryType: "",
    source: "",
    modeOfContacts: [],
  };

  updateForm = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState((prevState) => {
        const modeOfContacts = checked
          ? [...prevState.modeOfContacts, value]
          : prevState.modeOfContacts.filter(
              (modeOfContact) => modeOfContact !== value
            );
        return { modeOfContacts };
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `
      First Name: ${this.state.firstName}\n
      Last Name: ${this.state.lastName}\n
      Query Type: ${this.state.queryType}\n
      How did you hear about us: ${this.state.source}\n
      How would you like to be contacted: ${this.state.modeOfContacts.join(
        ", "
      )}
      `
    );
  };

  render() {
    const isFormValid =
      this.state.firstName &&
      this.state.lastName &&
      this.state.queryType &&
      this.state.source;

    return (
      <>
        <b>Questions? Please do not hestitate to contact us!</b>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.updateForm}
            />
            <label>Last Name:</label>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.updateForm}
            />
          </div>
          <div>
            <label>Kind of Query:</label>
            <input
              name="queryType"
              type="radio"
              value="support"
              checked={this.state.queryType === "support"}
              onChange={this.updateForm}
            />
            Support
            <input
              name="queryType"
              type="radio"
              value="sales"
              checked={this.state.queryType === "sales"}
              onChange={this.updateForm}
            />
            Sales
            <input
              name="queryType"
              type="radio"
              value="marketing"
              checked={this.state.queryType === "marketing"}
              onChange={this.updateForm}
            />
            Marketing
          </div>
          <div>
            <label>How did you here about us?</label>
            <select
              name="source"
              value={this.state.source}
              onChange={this.updateForm}
            >
              <option value="Word Of Mouth">Word of Mouth</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Social Media">Social Media</option>
            </select>
          </div>
          <div>
            <label>How would you like to be contacted?:</label>
            <input
              type="checkbox"
              name="modeOfContacts"
              value="Email"
              checked={this.state.modeOfContacts.includes("Email")}
              onChange={this.updateForm}
            />
            Email
            <input
              type="checkbox"
              name="modeOfContacts"
              value="Phone"
              checked={this.state.modeOfContacts.includes("Phone")}
              onChange={this.updateForm}
            />
            Phone Number
            <input
              type="checkbox"
              name="modeOfContacts"
              value="Slow Mail"
              checked={this.state.modeOfContacts.includes("Slow Mail")}
              onChange={this.updateForm}
            />
            Slow Mail
          </div>
          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
