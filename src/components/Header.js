import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
        className="ui container center"
      >
        <h2>Contact Manager</h2>
      </div>
    </div>
  );
};
export default Header;
