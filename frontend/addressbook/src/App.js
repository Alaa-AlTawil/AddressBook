import './App.css';
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contacts from './components/Contacts' 
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/contacts" element={<Contacts/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
