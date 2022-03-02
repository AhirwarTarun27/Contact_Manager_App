import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { ContactDetail } from "./ContactDetail";

function App() {
  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
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
      <Routes>
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              removeContactHandler={removeContactHandler}
            />
          }
        />
        <Route path="/contact/:id" element={<ContactDetail />} />
      </Routes>

      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        removeContactHandler={removeContactHandler}
      /> */}
    </div>
  );
}

export default App;
