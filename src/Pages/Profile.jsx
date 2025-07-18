import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../API/axiosinstance";
import endpoint from "../API/endpoint";
import ProfileCard from "../Components/ProfileCard";
import RepoList from "../Components/RepoList";
import "../Styles/Profile.css";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        const userRes = await axiosInstance.get(endpoint.getUser(username));
        const repoRes = await axiosInstance.get(endpoint.getRepos(username));
        setUser(userRes.data);
        setRepos(repoRes.data);
      } catch (err) {
        setError("User not found or API rate limit exceeded.");
        setUser(null);
        setRepos([]);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="profile-container">
      {error && <div className="error-alert">{error}</div>}
      {user && <ProfileCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
};

export default Profile;
