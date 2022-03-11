import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { ContactDetail } from "./ContactDetail";
import api from "../api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Retrievecontacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log("argument", contact);
    const request = {
      id: uuid,
      ...contact,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newConatctList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newConatctList);
  };

  const searchHandler = (searchTerm) => {
    // console.log("searchTerm", searchTerm);
    setSearchTerms(searchTerm);
    if (searchTerm !== "") {
      const newConatctList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newConatctList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(localStorageKey));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
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
              contacts={searchTerms.length < 1 ? contacts : searchResults}
              removeContactHandler={removeContactHandler}
              term={searchTerms}
              searchKeyword={searchHandler}
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
