import logo from './logo.svg';
import './App.css';
import { sp, Web } from "@pnp/sp/presets/all";
import { getDataGrid} from "./component/ListService";
import Api from "./component/Api"
 function  App() {
  // let web;
  // if (process.env.NODE_ENV === 'production') {
  //     web = sp.web;
  // }
  // else {
  //     web = Web("http://localhost:8080");
  // }
  // let items = await getDataGrid();

  //console.log(items);
  return (
   
    <div className="App">
    <Api />
    </div>
  );
}

export default App;
