import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "./ContactCard";

const ContactList = (props) => {
  console.log("props", props);
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.removeContactHandler(id);
  };
  const renderContact = props.contacts.map((data) => {
    return <ContactCard contact={data} clickHandler={deleteContactHandler} />;
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

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
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      {renderContact.length > 0 ? renderContact : "No Contact Available"}
    </div>
  );
};

export default ContactList;
