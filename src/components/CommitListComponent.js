import React, { useState, useEffect } from "react";

function CommitListComponent() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/ajonesb/react-github-commits/commits")
      .then((response) => response.json())
      .then((data) => {
        setCommits(data);
      });
  }, []);

  return (
    <div>
        <h1 className="mt-2 commit-list-title"> GIT COMMIT HISTORY FOR PROJECT</h1>
        {commits.map((commit) => (
          <div className="col-md-12 card" key={commit.node_id}>
            <span className="card-body">
              <h3 className="card-title">Commit Message:</h3>
              <p className="card-text"> {commit.commit.message}</p>
            </span>
            <span className="card-body">
              <a
                className="btn btn-primary"
                href={commit.html_url}
                role="button"
              >
                View Github Commit
              </a>
            </span>
          </div>
        ))}
      
    </div>
  );
}

export default CommitListComponent;
