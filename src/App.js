import "./App.css";
import CommitListComponent from "./CommitListComponent";
import SearchGitRepo from "./SearchGitRepo";
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <div className="App">
      <SearchGitRepo /> 
      <CommitListComponent />
    </div>
  );
}

export default App;
