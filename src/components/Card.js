import React from "react";

function Card(_props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>{_props.name}</h2>
          <img className="circle-img" src={_props.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{_props.phone}</p>
          <p className="info">{_props.email}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
