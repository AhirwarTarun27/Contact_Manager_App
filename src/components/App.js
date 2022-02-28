import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newConatctList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newConatctList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(localStorageKey));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        removeContactHandler={removeContactHandler}
      />
    </div>
  );
}

export default App;
