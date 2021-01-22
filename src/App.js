import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Cards/>
      </div>
  );
}

export default App;
