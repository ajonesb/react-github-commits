import React, { useState, useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";

function UserGitProfile() {
  const [name, setname] = useState("");
  const [userName, setUsername] = useState("");
  const [repos, setRepos] = useState("");
  const [blog, setBlog] = useState("");
  const [html_url, setHtmlurl] = useState("");
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/ajonesb")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    public_repos,
    blog,
    html_url,
    location,
    avatar_url,
  }) => {
    setname(name);
    setUsername(login);
    setRepos(public_repos);
    setBlog(blog);
    setHtmlurl(html_url);
    setLocation(location);
    setAvatar(avatar_url);
  };

  return (
    <div>
      <div className="card">
        <Card>
          <Image src={avatar} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <Icon name="user icon" />
              {name}
            </Card.Header>
            <Card.Header>
              <Icon name="code" />
              {userName}
            </Card.Header>
          </Card.Content>

          <Card.Content extra>
            <p>
              <Icon name="location arrow icon" />
              {location}
            </p>
          </Card.Content>

          <Card.Content extra>
            <p>
              <Icon name="user" />
              {repos}Repos
            </p>
          </Card.Content>

          <a className="btn btn-primary" href={html_url} role="button">
            Visit Github
          </a>

          <a className="btn btn-secondary" href={blog} role="button">
            Visit Portfolio
          </a>
        </Card>
      </div>
    </div>
  );
}

export default UserGitProfile;
