import "./App.css";
import CommitListComponent from "./CommitListComponent";
import UserGitProfile from "./UserGitProfile";
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <div className="App">
      <UserGitProfile /> 
      <CommitListComponent />
    </div>
  );
}

export default App;
