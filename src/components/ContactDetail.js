import user from "../images/user2.png";

export const ContactDetail = (props) => {
  console.log(props);
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
          <div className="header">Tarun</div>
          <div className="description">tarun@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
