import React from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "./ContactCard";

const ContactList = (props) => {
  //   console.log(props);
  const deleteContactHandler = (id) => {
    props.removeContactHandler(id);
  };
  const renderContact = props.contacts.map((data) => {
    return <ContactCard contact={data} clickHandler={deleteContactHandler} />;
  });
  return (
    <div className="ui celled list">
      <h2
        style={{
          margin: "2%",
          marginTop: "5%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      {renderContact}
    </div>
  );
};

export default ContactList;
