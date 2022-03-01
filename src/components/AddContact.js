import React from "react";
import "./App.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("all the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.state);
  };

  render() {
    return (
      <div
        className="ui main"
        style={{
          marginTop: "5%",
        }}
      >
        <form className="ui form boxShadow" onSubmit={this.add}>
          <h2>Add Contact</h2>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Add</button>
          <Link to="/">
            <button className="ui button blue right">Go to Contact-list</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddContact;
