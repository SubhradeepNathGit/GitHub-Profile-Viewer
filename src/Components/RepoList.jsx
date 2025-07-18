import React from "react";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-section">
      <h3 className="repo-title">Repositories</h3>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <div className="repo-left">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="repo-name"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="repo-desc">{repo.description}</p>
            )}
          </div>
          <div className="repo-badges">
            <span className="badge">⭐ {repo.stargazers_count}</span>
            <span className="badge">🍴 {repo.forks_count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
