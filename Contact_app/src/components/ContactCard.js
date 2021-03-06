import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import user from "../images/user.png";
import "./App.css";

export const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  // const [userData, setUserData] = useState([])

  // console.log("props", props);
  return (
    <div
      className="item"
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "10px",
      }}
    >
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{
            pathname: `/contact/${id}`,
          }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      <i
        className="trash alternate outline icon red pointer"
        style={{
          fontSize: "18px",
          position: "absolute",
          right: "20px",
        }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};
