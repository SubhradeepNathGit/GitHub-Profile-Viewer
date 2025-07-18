import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img
        src={user.avatar_url}
        alt="Avatar"
        className="profile-avatar"
      />
      <h2 className="profile-name">{user.name || user.login}</h2>
      <p className="profile-bio">{user.bio}</p>
      <p className="profile-follow">
        <strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}
      </p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <button className="view-profile-btn">View Profile</button>
      </a>
    </div>
  );
};

export default ProfileCard;
