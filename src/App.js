import "./App.css";
import "semantic-ui-css/semantic.min.css";

// Components
import CommitListComponent from "./components/CommitListComponent";
import UserGitProfile from "./components/UserGitProfile";

function App() {
  return (
    <div className="container-fluid App">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-3">
          <UserGitProfile />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-9">
          <CommitListComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
