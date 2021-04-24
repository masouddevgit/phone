import logo from './logo.svg';
import './App.css';
import { sp, Web } from "@pnp/sp/presets/all";
import { getDataGrid} from "./component/ListService";
import api from "./component/api"
async function  App() {
  let web;
  if (process.env.NODE_ENV === 'production') {
      web = sp.web;
  }
  else {
      web = Web("http://localhost:8080");
  }
  let items = await getDataGrid();

  console.log(items);
  return (
   
    <div className="App">
       <api></api>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
