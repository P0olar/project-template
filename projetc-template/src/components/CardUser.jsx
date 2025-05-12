import React from "react";

const CardUser = ({ name, imageUrl, type }) => {
  return (
    <div className="user-card">
      <img className="profile-img" src={imageUrl} alt={name} />
      <div className="user-info">
        <h3>{name}</h3>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default CardUser;
