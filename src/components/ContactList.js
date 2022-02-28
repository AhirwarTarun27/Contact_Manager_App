import React from "react";
import { ContactCard } from "./ContactCard";

const ContactList = (props) => {
  //   console.log(props);
  const constacts = [
    {
      id: "1",
      name: "tarun",
      email: "t@t.com",
    },
  ];
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
        }}
      >
        Contact List
      </h2>
      {renderContact}
    </div>
  );
};

export default ContactList;
