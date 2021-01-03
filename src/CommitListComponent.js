import { React, useEffect, useState } from "react";
import { Card } from "semantic-ui-react";

function CommitListComponent() {
  const [commit, setCommits] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/ajonesb/react-js-movies/commits")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCommitData(data);
      });
  }, []);

  const setCommitData = ({ commit }) => {
    setCommits(commit);
  };

  return (
    <div className="card">
      <Card>
        <Card.Content>
          <Card.Header>
            {commit}
            {/* <ul>
              {commits.map((commit) => (
                <li key={commit.id}>
                  {commit.author.name}: {commit.message}
                </li>
              ))}
            </ul> */}
          </Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CommitListComponent;
