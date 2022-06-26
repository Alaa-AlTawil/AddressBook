import './App.css';
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contacts from './components/Contacts' 
import AddContact from './components/AddContact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/contacts" element={<Contacts/>}></Route>
      <Route path="/addcontact" element={<AddContact/>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
