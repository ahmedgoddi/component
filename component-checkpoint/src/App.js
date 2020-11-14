import logo from './logo.svg';
import './App.css';
import ProfilPhoto from "./Component/Profile/ProfilPhoto"
import FullName from "./Component/Profile/FullName"
import Address from "./Component/Profile/Address"


function App() {
  
  return (
    <div className="profil">
    <ProfilPhoto/>
    <div className="Name-Address">
    <FullName/>
    <br/>
    <Address/>
    </div>
    </div>
    
  )
}

export default App;
