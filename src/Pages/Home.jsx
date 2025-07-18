import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css"; 

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim() !== "") {
      navigate(`/profile/${username}`);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">GitHub Profile Viewer</h1>
      <div className="d-flex justify-content-center gap-2">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
