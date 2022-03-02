import user from "../images/user2.png";
import { Link, useParams } from "react-router-dom";

export const ContactDetail = (props) => {
  const { id } = useParams();
  let data = JSON.parse(localStorage.getItem("contacts"));

  let newObj = {};

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      newObj = data[i];
    }
  }
  console.log("newObj", newObj);

  // console.log(props);
  return (
    <div
      className="main"
      style={{
        margin: "5%",
      }}
    >
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{newObj.name}</div>
          <div className="description">{newObj.email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to={"/"}>
          <button
            style={{
              display: "flex",
              margin: "auto",
            }}
            className="ui button blue center"
          >
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};
