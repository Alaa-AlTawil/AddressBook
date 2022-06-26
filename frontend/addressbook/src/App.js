import './App.css';
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contacts from './components/Contacts' 
import AddContact from './components/AddContact';
import Register from './components/Register';
import Map from './components/Map'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/contacts" element={<Contacts/>}></Route>
      <Route path="/addcontact" element={<AddContact/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/map" element={<Map/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
