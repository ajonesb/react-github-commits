import React, { useState, useEffect } from "react";

function CommitListComponent() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/ajonesb/react-js-movies/commits")
      .then((response) => response.json())
      .then((data) => {
        setCommits(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {commits.map((commit) => (
          <div className="col-md-4 card" key={commit.node_id}>
            <span className="card-body">
              <h2 className="card-title">Node ID:</h2>
              <p className="card-text">{commit.sha}</p>
            </span>
            <span className="card-body">
              <h2 className="card-title">Commit Message:</h2>
              <p className="card-text"> {commit.commit.message}</p>
            </span>
            <span className="card-body">
              <h2 className="card-title">Commit URL:</h2>
              <p className="card-text">{commit.commit.url}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommitListComponent;
