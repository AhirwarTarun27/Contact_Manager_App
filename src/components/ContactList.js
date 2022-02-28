import React from "react";
import { ContactCard } from "./ContactCard";

const ContactList = (props) => {
  //   console.log(props);
  const deleteContactHandler = (id) => {
    props.removeContactHandler(id);
  };
  const renderContact = props.contacts.map((data) => {
    return <ContactCard contact={data} clickHandler={deleteContactHandler} />;
  });
  return <div className="ui celled list">{renderContact}</div>;
};

export default ContactList;
